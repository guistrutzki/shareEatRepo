import React from 'react';

import {
  CommentWrapper,
  CommentImgArea,
  CommentImage,
  CommentContentArea,
  CommentAuthor,
  CommentTitle,
  CommentDescription,
  CommentRatingArea,
  RatingStar,
} from './styles';
import starIcon from '../../assets/star.png';

const Commentary = props => {
  const {data} = props;
  const stars = [];

  for (let i = 0; i < data.nota; i += 1) {
    stars.push(<RatingStar key={i} source={starIcon} />);
  }

  return (
    <CommentWrapper>
      <CommentImgArea>
        <CommentImage source={{uri: data.urlFoto}} />
      </CommentImgArea>

      <CommentContentArea>
        <CommentRatingArea>{stars}</CommentRatingArea>
        <CommentAuthor>{data.nome}</CommentAuthor>
        <CommentTitle>{data.titulo}</CommentTitle>
        <CommentDescription numberOfLines={2}>
          {data.comentario}
        </CommentDescription>
      </CommentContentArea>
    </CommentWrapper>
  );
};

export default Commentary;
