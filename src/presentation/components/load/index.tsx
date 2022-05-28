import * as S from './styles'

const Load = () => {
  return (
    <S.Load
      role="spinbutton"
      tabIndex={0}
      aria-valuetext="Carregando…"
      aria-busy="true"
      aria-live="assertive"
    >
      <span />
      <span />
      <span />
      <span />
    </S.Load>
  )
}

export default Load
