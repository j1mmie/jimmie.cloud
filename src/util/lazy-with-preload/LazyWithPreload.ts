import React from 'react'

type PromisedComponent = () => Promise<{ default:React.FC }>

export interface PreloadableComponent {
  ():JSX.Element
  preload:PromisedComponent
}

export function lazyWithPreload(
  factory:PromisedComponent
):PreloadableComponent {
  const comp = React.lazy(factory) as React.LazyExoticComponent<React.FC> & PreloadableComponent
  comp.preload = factory
  return comp
}
