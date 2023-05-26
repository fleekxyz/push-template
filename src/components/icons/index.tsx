import styled from 'styled-components';
import DarkSVGIcon from '../../assets/dark.svg';
import LightSVGIcon from '../../assets/light.svg';

const SVGIconButton = styled.div`
  cursor: pointer;
`;

type IconProp = {
  onClick: (arg0: any) => any,
  title: string
};

export const DarkIcon = ({ title, onClick }: IconProp) => <SVGIconButton title={title} onClick={onClick}><img src={DarkSVGIcon} alt="dark-icon" /></SVGIconButton>;
export const LightIcon = ({ title, onClick }: IconProp) => <SVGIconButton title={title} onClick={onClick}><img src={LightSVGIcon} alt="light-icon" /></SVGIconButton>;
