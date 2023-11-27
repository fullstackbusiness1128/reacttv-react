import * as React from 'react';
import PropTypes from 'prop-types';
import { Image } from 'react-native';
import { device } from '../constants';

class ImageSlide extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      height: 0,
      width: 0
    };
  }

  componentDidMount() {
    // const { source, width: imageWidth } = this.props;
    const source= this.props.source
    const width= this.props.width

    if (source,width) {
    //   const { height, width } = Image.resolveAssetSource(source).width;
      //  const responsiveHeight = Math.round((imageWidth * height) / width);
      const responsiveHeight=100%
      this.setState({
        height: responsiveHeight,
        width: "100%"
      });
    console.log(this.props)
    }
  
   }

  render() {
    const { source } = this.props;
    const { height, width } = this.state;

    return <Image source={source} style={{ height, width }} />;
  }
}

ImageSlide.defaultProps = {
  source: null,
  width: device.width
};

ImageSlide.propTypes = {
  source: PropTypes.number,
  width: PropTypes.number
};

export default ImageSlide;
