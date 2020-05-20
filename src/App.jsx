import React, { Component } from 'react'
import Card from '@material-ui/core/Card'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
const App = () => {
  return (
    <>
      <Card>
        <CardMedia
          className="sample"
          image="https://images.unsplash.com/photo-1589691994207-a9e2d0f143d2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3072&q=80"
          title="Paella dish"
        />
        <CardContent>
          <h1>hi</h1>
          <h2>how are you doing?</h2>
          <h3>please show this</h3>
        </CardContent>
      </Card>
    </>
  )
}

export default App
