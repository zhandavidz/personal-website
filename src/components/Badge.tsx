import { cva } from 'class-variance-authority';

type BadgeProps = {
    color?: BadgeVariants['color'];
    size?: BadgeVariants['size'];
    children?: React.ReactNode;
};
type BadgeVariants = {
    color: 'red' | 'orange' | 'yellow' | 'green' | 'blue' | 'purple' | 'gray' | 'white' | 'black';
    size: 'small' | 'medium' | 'large';
};

const badgeStyles = cva(
  'inline-flex items-center rounded-md font-medium ring-1 ring-inset transition-colors',
  {
    variants: {
      color: {
        red: 'bg-red-100 text-red-700 ring-red-600/20 dark:bg-red-800/30 dark:text-red-300 dark:ring-red-500/15',
        orange: 'bg-orange-100 text-orange-700 ring-orange-600/20 dark:bg-orange-800/30 dark:text-orange-300 dark:ring-orange-500/15',
        yellow: 'bg-yellow-100 text-yellow-800 ring-yellow-600/30 dark:bg-yellow-800/30 dark:text-yellow-300 dark:ring-yellow-500/20',
        green: 'bg-green-100 text-green-700 ring-green-600/30 dark:bg-green-800/30 dark:text-green-300 dark:ring-green-500/20',
        blue: 'bg-blue-100 text-blue-700 ring-blue-700/20 dark:bg-blue-800/30 dark:text-blue-300 dark:ring-blue-500/15',
        purple: 'bg-purple-100 text-purple-700 ring-purple-700/20 dark:bg-purple-800/30 dark:text-purple-300 dark:ring-purple-500/15',
        gray: 'bg-gray-200 text-gray-700 ring-gray-500/30 dark:bg-gray-700/30 dark:text-gray-300 dark:ring-gray-500/20',
        white: 'bg-gray-50 text-gray-700 ring-gray-300 dark:bg-gray-200/20 dark:text-gray-100 dark:ring-gray-100/10',
        black: 'bg-gray-700 text-gray-100 ring-gray-900 dark:bg-gray-900/30 dark:text-gray-300 dark:ring-gray-600',
      },
      size: {
        small: 'px-2 py-1 text-xs',
        medium: 'px-3 py-2 text-sm',
        large: 'px-4 py-3 text-base',
      },
    },
    defaultVariants: {
      color: 'blue',
      size: 'small',
    },
  }
);

export default function Badge({ color, size, children = 'Badge' }: BadgeProps) {
  return <span className={badgeStyles({ color, size })}>{children}</span>;
}
