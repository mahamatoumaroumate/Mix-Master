import styled from 'styled-components'
const Wrapper = styled.div`
  .single-drink-container {
    display: grid;
    grid-template-columns: 2fr;
    gap: 2rem;
    @media (min-width: 992px) {
      grid-template-columns: 2fr 3fr;
    }
    .img {
      with: 100%;
      border-radius: var(--borderRadius);
    }
    margin-top: 2rem;
    .drink {
      padding: 0.2rem 0.5rem;
      background: var(--primary-500);
      margin-right: 0.5rem;
      color: var(--white);
      border-radius: var(--borderRadius);
    }
    p {
      margin-top: 0.5rem;
      color: var(--black);
      font-wight: 700;
      font-size: 1.2rem;
      line-height: 2;
    }
    .ingredients {
      display: inline-block;
      margin-right: 0.5rem;
    }
  }
`

export default Wrapper
