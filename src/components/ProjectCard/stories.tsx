import { Story, Meta } from '@storybook/react'
import ProjectCard, { ProjectCardProps } from '.'

export default {
  title: 'ProjectCard',
  component: ProjectCard,
  args: {
    image: '/img/audiophile-print.png',
    name: 'audiophile',
    description:
      'A e-commerce website selling audio gear, a frontend mentor challenge level guru'
  }
} as Meta

export const Default: Story<ProjectCardProps> = (args) => (
  <ProjectCard {...args} />
)
