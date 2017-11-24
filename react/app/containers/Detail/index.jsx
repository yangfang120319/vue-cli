import React from 'react'
/*
class Detail extends React.Component {
    render() {
        return (
            <p>Detail，url参数：</p>
        )
    }
}*/


const Detail = ({ match }) => (
  <div>
    <h3>ID: {match.params.id}</h3>
  </div>
)

export default Detail