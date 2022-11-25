// import type { StoryObj } from '@storybook/react'
import type { ComponentStory, Meta } from '@storybook/react'
import { Button, ButtonProps } from '@caju-ds/react'

export default {
  title: 'Form/Button',
  component: Button,
  args: {
    children: 'Ver todos',
  },
  argTypes: {
    size: {
      control: 'inline-radio',
      options: ['small', 'medium', 'large'],
      defaultValue: 'large',
    },
    disabled: {
      control: 'boolean',
      defaultValue: false,
    },
    icon: {
      control: 'inline-radio',
      options: ['left', 'right', 'center', 'none'],
      defaultValue: 'none',
    },
    primary: {
      control: 'inline-radio',
      options: [
        'aipim',
        'arroz',
        'banana',
        'berinjela',
        'cogumelo',
        'horta',
        'mirtilo',
        'morango',
      ],
    },
    secondary: {
      control: 'inline-radio',
      options: [
        'aipim',
        'banana',
        'berinjela',
        'cogumelo',
        'horta',
        'mirtilo',
        'morango',
      ],
    },
    tertiary: {
      control: 'inline-radio',
      options: [
        'aipim',
        'arroz',
        'banana',
        'berinjela',
        'cogumelo',
        'horta',
        'mirtilo',
        'morango',
      ],
    },
    dash: {
      control: 'inline-radio',
      options: [
        'aipim',
        'arroz',
        'banana',
        'berinjela',
        'cogumelo',
        'horta',
        'mirtilo',
        'morango',
      ],
    },
    invisible: {
      control: 'inline-radio',
      options: [
        'aipim',
        'arroz',
        'banana',
        'berinjela',
        'cogumelo',
        'horta',
        'mirtilo',
        'morango',
      ],
    },
    link: {
      control: 'inline-radio',
      options: [
        'aipim',
        'arroz',
        'banana',
        'berinjela',
        'cogumelo',
        'horta',
        'mirtilo',
        'morango',
      ],
    },
  },
} as Meta<ButtonProps>

// 👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof Button> = ({
  icon,
  children,
  ...args
}: any) => (
  <>
    {args.size === 'small' && (
      <Button {...args} size={args.size}>
        {children}
      </Button>
    )}

    {args.size !== 'small' && (
      <Button
        {...args}
        style={
          args.size === 'large' && icon === 'center'
            ? { minWidth: 56 }
            : { minWidth: 40 }
        }
      >
        {icon === 'left' && (
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20.2188 6H7.5L7.21875 4.625C7.15625 4.28125 6.84375 4 6.5 4H3.375C3.15625 4 3 4.1875 3 4.375V5.125C3 5.34375 3.15625 5.5 3.375 5.5H5.875L8.03125 16.625C7.6875 17 7.5 17.4688 7.5 18C7.5 19.125 8.375 20 9.5 20C10.5938 20 11.5 19.125 11.5 18C11.5 17.6562 11.375 17.3125 11.2188 17H15.75C15.5938 17.3125 15.5 17.6562 15.5 18C15.5 19.125 16.375 20 17.5 20C18.5938 20 19.5 19.125 19.5 18C19.5 17.4375 19.25 16.9375 18.875 16.5625L18.9062 16.4375C19 15.9688 18.6562 15.5 18.1562 15.5H9.34375L9.0625 14H18.8125C19.1875 14 19.4688 13.7812 19.5625 13.4375L20.9688 6.9375C21.0625 6.46875 20.7188 6 20.2188 6ZM9.5 18.75C9.0625 18.75 8.75 18.4375 8.75 18C8.75 17.5938 9.0625 17.25 9.5 17.25C9.90625 17.25 10.25 17.5938 10.25 18C10.25 18.4375 9.90625 18.75 9.5 18.75ZM17.5 18.75C17.0625 18.75 16.75 18.4375 16.75 18C16.75 17.5938 17.0625 17.25 17.5 17.25C17.9062 17.25 18.25 17.5938 18.25 18C18.25 18.4375 17.9062 18.75 17.5 18.75ZM18.2188 12.5H8.75L7.78125 7.5H19.3125L18.2188 12.5Z"
              fill="#54412F"
            />
          </svg>
        )}
        {icon !== 'center' ? (
          children
        ) : (
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20.2188 6H7.5L7.21875 4.625C7.15625 4.28125 6.84375 4 6.5 4H3.375C3.15625 4 3 4.1875 3 4.375V5.125C3 5.34375 3.15625 5.5 3.375 5.5H5.875L8.03125 16.625C7.6875 17 7.5 17.4688 7.5 18C7.5 19.125 8.375 20 9.5 20C10.5938 20 11.5 19.125 11.5 18C11.5 17.6562 11.375 17.3125 11.2188 17H15.75C15.5938 17.3125 15.5 17.6562 15.5 18C15.5 19.125 16.375 20 17.5 20C18.5938 20 19.5 19.125 19.5 18C19.5 17.4375 19.25 16.9375 18.875 16.5625L18.9062 16.4375C19 15.9688 18.6562 15.5 18.1562 15.5H9.34375L9.0625 14H18.8125C19.1875 14 19.4688 13.7812 19.5625 13.4375L20.9688 6.9375C21.0625 6.46875 20.7188 6 20.2188 6ZM9.5 18.75C9.0625 18.75 8.75 18.4375 8.75 18C8.75 17.5938 9.0625 17.25 9.5 17.25C9.90625 17.25 10.25 17.5938 10.25 18C10.25 18.4375 9.90625 18.75 9.5 18.75ZM17.5 18.75C17.0625 18.75 16.75 18.4375 16.75 18C16.75 17.5938 17.0625 17.25 17.5 17.25C17.9062 17.25 18.25 17.5938 18.25 18C18.25 18.4375 17.9062 18.75 17.5 18.75ZM18.2188 12.5H8.75L7.78125 7.5H19.3125L18.2188 12.5Z"
              fill="#54412F"
            />
          </svg>
        )}
        {icon === 'right' && (
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20.2188 6H7.5L7.21875 4.625C7.15625 4.28125 6.84375 4 6.5 4H3.375C3.15625 4 3 4.1875 3 4.375V5.125C3 5.34375 3.15625 5.5 3.375 5.5H5.875L8.03125 16.625C7.6875 17 7.5 17.4688 7.5 18C7.5 19.125 8.375 20 9.5 20C10.5938 20 11.5 19.125 11.5 18C11.5 17.6562 11.375 17.3125 11.2188 17H15.75C15.5938 17.3125 15.5 17.6562 15.5 18C15.5 19.125 16.375 20 17.5 20C18.5938 20 19.5 19.125 19.5 18C19.5 17.4375 19.25 16.9375 18.875 16.5625L18.9062 16.4375C19 15.9688 18.6562 15.5 18.1562 15.5H9.34375L9.0625 14H18.8125C19.1875 14 19.4688 13.7812 19.5625 13.4375L20.9688 6.9375C21.0625 6.46875 20.7188 6 20.2188 6ZM9.5 18.75C9.0625 18.75 8.75 18.4375 8.75 18C8.75 17.5938 9.0625 17.25 9.5 17.25C9.90625 17.25 10.25 17.5938 10.25 18C10.25 18.4375 9.90625 18.75 9.5 18.75ZM17.5 18.75C17.0625 18.75 16.75 18.4375 16.75 18C16.75 17.5938 17.0625 17.25 17.5 17.25C17.9062 17.25 18.25 17.5938 18.25 18C18.25 18.4375 17.9062 18.75 17.5 18.75ZM18.2188 12.5H8.75L7.78125 7.5H19.3125L18.2188 12.5Z"
              fill="#54412F"
            />
          </svg>
        )}
      </Button>
    )}
  </>
)

export const Primary = Template.bind({})
Primary.args = {
  primary: 'horta',
}
Primary.argTypes = {
  primary: {
    table: {
      disable: false,
    },
  },
  secondary: {
    table: {
      disable: true,
    },
  },
  tertiary: {
    table: {
      disable: true,
    },
  },
  invisible: {
    table: {
      disable: true,
    },
  },
  dash: {
    table: {
      disable: true,
    },
  },
  link: {
    table: {
      disable: true,
    },
  },
}
export const Secondary = Template.bind({})

Secondary.args = {
  secondary: 'horta',
}
Secondary.argTypes = {
  primary: {
    table: {
      disable: true,
    },
  },
  secondary: {
    table: {
      disable: false,
    },
  },
  tertiary: {
    table: {
      disable: true,
    },
  },
  invisible: {
    table: {
      disable: true,
    },
  },
  dash: {
    table: {
      disable: true,
    },
  },
  link: {
    table: {
      disable: true,
    },
  },
}

export const Tertiary = Template.bind({})
Tertiary.args = {
  tertiary: 'horta',
}
Tertiary.argTypes = {
  primary: {
    table: {
      disable: true,
    },
  },
  secondary: {
    table: {
      disable: true,
    },
  },
  tertiary: {
    table: {
      disable: false,
    },
  },
  invisible: {
    table: {
      disable: true,
    },
  },
  dash: {
    table: {
      disable: true,
    },
  },
  link: {
    table: {
      disable: true,
    },
  },
}

export const Invisible = Template.bind({})
Invisible.args = {
  invisible: 'horta',
}
Invisible.argTypes = {
  primary: {
    table: {
      disable: true,
    },
  },
  secondary: {
    table: {
      disable: true,
    },
  },
  tertiary: {
    table: {
      disable: true,
    },
  },
  invisible: {
    table: {
      disable: false,
    },
  },
  dash: {
    table: {
      disable: true,
    },
  },
  link: {
    table: {
      disable: true,
    },
  },
}

export const Dash = Template.bind({})
Dash.args = {
  dash: 'horta',
}
Dash.argTypes = {
  primary: {
    table: {
      disable: true,
    },
  },
  secondary: {
    table: {
      disable: true,
    },
  },
  tertiary: {
    table: {
      disable: true,
    },
  },
  invisible: {
    table: {
      disable: true,
    },
  },
  dash: {
    table: {
      disable: false,
    },
  },
  link: {
    table: {
      disable: true,
    },
  },
}

export const Link: any = Template.bind({})
Link.args = {
  link: 'horta',
}
Link.argTypes = {
  primary: {
    table: {
      disable: true,
    },
  },
  secondary: {
    table: {
      disable: true,
    },
  },
  tertiary: {
    table: {
      disable: true,
    },
  },
  invisible: {
    table: {
      disable: true,
    },
  },
  dash: {
    table: {
      disable: true,
    },
  },
  link: {
    table: {
      disable: false,
    },
  },
  icon: {
    table: {
      disable: true,
    },
  },
  disabled: {
    table: {
      disable: true,
    },
  },
}
