import { useNavigate } from 'react-router-dom'
import { useExampleSimple } from 'store/exampleSimple'
import { useExampleWithPayload } from 'store/exampleWithPayload'
import * as S from './styles'
import * as C from 'components'

const Home = () => {
  const { exampleSimple, setChangeExample } = useExampleSimple()
  const { exampleWithPayload, setAddText, setRemoveText } =
    useExampleWithPayload()
  const navigate = useNavigate()

  const handleChange = () => {
    setChangeExample()

    exampleWithPayload
      ? setRemoveText()
      : setAddText({ exemploText: 'Example Text' })
  }

  return (
    <S.Container>
      <C.TitleSection title="Web Accessibility" />

      <br />

      <C.Logo width={50} height={50} />

      <br />

      <h1>
        Redux Example State:
        {exampleSimple ? ' true' : ' false'}
      </h1>

      <br />

      <h1>Payload: {exampleWithPayload || 'Empty'}</h1>

      <S.BtnGroup>
        <C.Button
          fullWidth={true}
          color="red"
          size="large"
          text="Change Global State"
          aria-label="Change Global State"
          className="btn"
          onClick={handleChange}
        />
      </S.BtnGroup>

      <S.BtnGroup>
        <C.Button
          fullWidth={true}
          color="blue"
          size="large"
          text="Page Example 1"
          aria-label="Page Example 1"
          className="btn"
          onClick={() => navigate('page-example-1')}
        />

        <C.Button
          fullWidth={true}
          color="blue"
          size="large"
          text="Page Example 2"
          aria-label="Page Example 2"
          className="btn"
          onClick={() => navigate('page-example-2')}
        />

        <C.Button
          fullWidth={true}
          color="blue"
          size="large"
          text="Page Example 3"
          aria-label="Page Example 3"
          className="btn"
          onClick={() => navigate('page-example-3')}
        />

        <C.Button
          fullWidth={true}
          color="blue"
          size="large"
          text="Page Example 4"
          aria-label="Page Example 4"
          className="btn"
          onClick={() => navigate('page-example-4')}
        />

        <C.Button
          fullWidth={true}
          color="blue"
          size="large"
          text="Page Example 5"
          aria-label="Page Example 5"
          className="btn"
          onClick={() => navigate('page-example-5')}
        />
      </S.BtnGroup>
    </S.Container>
  )
}

export default Home
