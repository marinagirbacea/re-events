import React, { Fragment } from "react";
import { Header, Card, Button, Image } from "semantic-ui-react";

function UserPhotos({ photos, profile, deletePhoto }) {
  let filteredPhotos;
  if (photos) {
    filteredPhotos = photos.filter(photo => {
      return photo.url !== profile.photoURL;
    });
  }

  return (
    <Fragment>
      <Header sub color="teal" content="All Photos" />

      <Card.Group itemsPerRow={5}>
        <Card>
          <Image src={profile.photoURL} />
          <Button positive>Main Photo</Button>
        </Card>
        {photos &&
          photos.map(photo => (
            <Card key={photo.id}>
              <Image src={photo.url} />
              <div className="ui two buttons">
                <Button basic color="green">
                  Main
                </Button>
                <Button
                  onClick={() => deletePhoto(photo)}
                  basic
                  icon="trash"
                  color="red"
                />
              </div>
            </Card>
          ))}
      </Card.Group>
    </Fragment>
  );
}

export default UserPhotos;
