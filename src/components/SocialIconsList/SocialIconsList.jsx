import { List, Item } from './SocialIconsList.styled';
import icons from '../../images/icons.svg';

const SocialIconsList = ({ fill, opacity }) => {
  return (
    <List fill={fill} opacity={opacity}>
      <Item>
        <svg>
          <use href={`${icons}#icon-facebook`}></use>
        </svg>
      </Item>
      <Item>
        <svg>
          <use href={`${icons}#icon-twitter`}></use>
        </svg>
      </Item>
      <Item>
        <svg>
          <use href={`${icons}#icon-youtube`}></use>
        </svg>
      </Item>
      <Item>
        <svg>
          <use href={`${icons}#icon-linkedin`}></use>
        </svg>
      </Item>
    </List>
  );
};

export default SocialIconsList;
