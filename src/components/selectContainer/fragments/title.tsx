import React from 'react'

import { cn } from '@/utils/cn'

type H3PropsWithoutChildren = Omit<React.ComponentProps<'h3'>, 'children'>

type TitleSelectContainer = React.PropsWithChildren &
  React.ComponentProps<'div'> & {
    titleCustomProps?: H3PropsWithoutChildren
  }

const TitleSelectContainer = ({
  children,
  titleCustomProps,
  ...props
}: TitleSelectContainer) => {
  return (
    <div
      {...props}
      className={cn(
        'absolute -top-4 left-4 z-10 h-[27px] max-w-[157px] rounded-full bg-border px-3',
        props.className,
      )}
    >
      <h3 {...titleCustomProps} className="text-center font-bold text-text">
        {children}
      </h3>
    </div>
  )
}

export default TitleSelectContainer
