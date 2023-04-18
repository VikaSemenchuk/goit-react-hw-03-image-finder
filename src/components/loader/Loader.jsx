import { ColorRing } from "react-loader-spinner"

export const Loader = () => {
    return (
        <ColorRing
  visible={true}
  height="80"
  width="80"
  ariaLabel="blocks-loading"
  wrapperStyle={{}}
  wrapperClass="blocks-wrapper"
  colors={['#303f9f', '#0f14b5', '#30669f', '#2727d4', '#1174ec']}
/>
    )
}