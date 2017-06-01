import React, { Component } from 'react';
import {
  Route,
  Link
} from 'react-router-dom';
import Wrapper from '../Wrapper';
import pomsAPI from '../../data';

export default class AlbumDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      album: null
    };
  }

  getAlbum(albumId) {
    pomsAPI.getAlbum(albumId)
      .then(album => this.setState({ album }));
  }

  componentDidMount() {
    const { albumId } = this.props.match.params;
    this.getAlbum(albumId);
  }

  componentWillReceiveProps({ match }) {
    this.getAlbum(match.params.albumId);
  }

  render() {
    const { album } = this.state;
    if (!album) return <div>Loading...</div>;

    return (
      <div>
        <Link to={album._id}><h3>{album.name}</h3></Link>
        {album &&
          <Wrapper
            history={this.props.history}
            location={this.props.location}
            key={album._id}
            poms={album.images} />}
      </div>
    );
  }
}

