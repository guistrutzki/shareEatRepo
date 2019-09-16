import styled from 'styled-components/native';

export const CommentWrapper = styled.View`
  width: 100%;
  min-height: 60px;
  height: auto;
  flex-direction: row;
  padding-right: 15%;
  background-color: #fff;
  border-bottom-width: 1px;
  border-bottom-color: #f1f1f1;
`;

export const CommentImgArea = styled.View`
  justify-content: center;
  align-items: center;
  width: 80px;
  height: auto;
  max-height: 80px;
  padding-left: 5%;
`;

export const CommentImage = styled.Image`
  width: 60px;
  height: 60px;
  border-radius: 30px;
`;

export const CommentContentArea = styled.View`
  flex-direction: column;
  position: relative;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 15px;
  width: 90%;
`;

export const CommentAuthor = styled.Text`
  font-size: 12px;
  color: #eead4f;
  font-weight: 500;
`;

export const CommentTitle = styled.Text`
  font-size: 14px;
  color: #eead4f;
  font-weight: 500;
`;

export const CommentDescription = styled.Text`
  font-size: 12px;
  margin-top: 5px;
  color: #eead4f;
  font-weight: 300;
  margin-right: 20px;
  text-align: justify;
`;

export const CommentRatingArea = styled.View`
  width: 40px;
  height: 15px;
  position: absolute;
  top: 20px;
  right: 30px;
  flex-direction: row-reverse;
`;

export const RatingStar = styled.Image`
  width: 10px;
  height: 15px;
`;
