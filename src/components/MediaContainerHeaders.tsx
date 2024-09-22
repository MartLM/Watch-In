interface MediaContainerHeadersProps {
  variant: 'movies' | 'media' | 'trend';
  title: string;
}

export const MediaContainerHeaders = ( { variant, title } : MediaContainerHeadersProps) => {

  switch (variant) {
    case 'media': {
      const titles = title.split(' ')

      return (
        <>
          <h2 className='title-2-media'>
            { titles[0] + ' ' }
            <span className="secondary-color">{ titles[1] }</span>
          </h2>
        </>
      )
    }
    case 'movies': {
      return (
        <>
          <span className='title-2-s'>Watch</span>
          <h2 className={ 'title-2' }>{title}</h2>
        </>
      )
    }
    case 'trend': {
      return (
        <>
          <span className='title-2-s'>Watch</span>
          <h2 className='title-2-xl'>{title}</h2>  
        </>
      )
    }
  }
}
