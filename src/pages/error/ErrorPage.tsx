import { useRouteError } from "react-router-dom"

export const ErrorPage = () => {
  const error = useRouteError() as Error

  return (
    <div>
      <h1>Oops!</h1>
      <p>sorrry, an unexpected error has occured. </p>
      <p>
      <i>{error.message}</i>
      </p>
    </div>
  )
}