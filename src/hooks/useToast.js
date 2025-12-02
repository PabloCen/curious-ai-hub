import { toast as sonnerToast } from 'sonner';

export const useToast = () => {
  const toast = ({ title, description, variant }) => {
    if (variant === 'destructive') {
      sonnerToast.error(title, {
        description: description,
      });
    } else {
        sonnerToast.info(title, {
            description: description,
            icon: '🚧',
        });
    }
  };

  return { toast };
};