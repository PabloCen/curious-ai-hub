import jwt from 'jsonwebtoken';
import User from '../models/User.js';

const generateToken = (res, userId) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET || 'secret123', {
    expiresIn: '30d',
  });

  res.cookie('jwt', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
  });
};

// @desc    Register a new user
// @route   POST /api/auth/register
// @access  Public
const registerUser = async (req, res) => {
  const { nombre, apellido, username, email, password, acceptTerms, acceptNewsletter } = req.body;

  try {
    const userExists = await User.findOne({ $or: [{ email }, { username }] });

    if (userExists) {
      res.status(400);
      throw new Error('El usuario o email ya existe');
    }

    const user = await User.create({
      nombre,
      apellido,
      username,
      email,
      password,
      acceptTerms,
      acceptNewsletter,
    });

    if (user) {
      // Do not log in immediately after register (optional, user requested redirect to login)
      // generateToken(res, user._id);

      res.status(201).json({
        _id: user._id,
        nombre: user.nombre,
        email: user.email,
        username: user.username,
      });
    } else {
      res.status(400);
      throw new Error('Datos de usuario inválidos');
    }
  } catch (error) {
     res.status(400).json({ message: error.message });
  }
};

// @desc    Auth user & get token
// @route   POST /api/auth/login
// @access  Public
const loginUser = async (req, res) => {
  const { emailOrUsername, password } = req.body;

  try {
    // Allow login with email or username
    const user = await User.findOne({
        $or: [
            { email: emailOrUsername },
            { username: emailOrUsername }
        ]
    });

    if (user && (await user.matchPassword(password))) {
      generateToken(res, user._id);

      res.status(200).json({
        _id: user._id,
        nombre: user.nombre,
        email: user.email,
        username: user.username,
      });
    } else {
      res.status(401);
      throw new Error('Email/Usuario o contraseña inválidos');
    }
  } catch (error) {
      res.status(401).json({ message: error.message });
  }
};

// @desc    Logout user / clear cookie
// @route   POST /api/auth/logout
// @access  Public
const logoutUser = (req, res) => {
  res.cookie('jwt', '', {
    httpOnly: true,
    expires: new Date(0),
  });
  res.status(200).json({ message: 'Sesión cerrada exitosamente' });
};

// @desc    Get user profile (Verify session)
// @route   GET /api/auth/verify
// @access  Private
const verifyUser = async (req, res) => {
    const token = req.cookies.jwt;

    if (!token) {
        return res.status(401).json({ message: 'No autenticado' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET || 'secret123');
        const user = await User.findById(decoded.userId).select('-password');

        if (!user) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }

        res.status(200).json(user);
    } catch (error) {
        res.status(401).json({ message: 'Token inválido' });
    }
};

export { registerUser, loginUser, logoutUser, verifyUser };
