import styled from 'styled-components'
const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  justify-items: center;
  flex-direction: column;
  gap: 20px;
  img {
    max-width: 600px;
    width: 90vw;
  }
  a {
    color: var(--primary-500);
  }
  p {
    line-height: 2;
  }
`
export default Wrapper
