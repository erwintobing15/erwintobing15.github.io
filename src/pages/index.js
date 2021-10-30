import * as React from "react"

// styles
const pageStyles = {
  color: "#232129",
  padding: 16,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
}

// markup
const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <title>Erwin Tobing</title>
      <h1 style={headingStyles}>
        Hello World!
      </h1>
      <p>This is my first time using gatsby to build my portofolio</p>
    </main>
  )
}

export default IndexPage
