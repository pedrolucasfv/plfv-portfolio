import { useEffect, useState } from 'react'
import * as S from './styles'

export type InfoCardStaticProps = {
  icon?: JSX.Element
  title: string
  items?: string[]
  titleButton?: string
  link?: string
  download?: boolean
  stopAnimation?: boolean
}

const InfoCardStatic = ({
  icon,
  items,
  title,
  link = '/',
  download = false
}: InfoCardStaticProps) => {
  return (
    <S.Wrapper id={title}>
      <S.Content>
        <S.Icon>{icon}</S.Icon>
        {items ? (
          <S.Items>
            <S.Title>{title}</S.Title>
            {items?.map((item, index) => (
              <S.Item key={index}>{item}</S.Item>
            ))}
          </S.Items>
        ) : (
          <>
            {download ? (
              <S.Button href={link} download>
                {title}
              </S.Button>
            ) : (
              <S.Button href={link} target="_blank">
                {title}
              </S.Button>
            )}
          </>
        )}
      </S.Content>
    </S.Wrapper>
  )
}
export default InfoCardStatic
