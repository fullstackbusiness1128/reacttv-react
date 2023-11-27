import * as React from 'react';
import PropTypes from 'prop-types';
import { FlatList, Image, StyleSheet, View, TouchableOpacity } from 'react-native';
import { colors, images } from '../constants';

import mockData from '../mockdata/data';

const MediaItemScroller = ({ dataset, navigation }) => {
  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => {
        navigation.navigate('StackMovieDetails', { movieId: item })

      }}>
        <View style={styles.item} >
          <Image source={{uri:item?.poster}} style={styles.image} />
        </View>
      </TouchableOpacity>)
  }

  return (
    <View>
    <FlatList
      contentContainerStyle={styles.containerFlatList}
      data={dataset}
      horizontal
      keyExtractor={item => item.id}
      renderItem={renderItem}

      showsHorizontalScrollIndicator={false}
    />
    </View>
  );
};

MediaItemScroller.defaultProps = {
  dataset: 'dumbData'
};

MediaItemScroller.propTypes = {
  // optional
  dataset: PropTypes.string
};

const styles = StyleSheet.create({
  containerFlatList: {
    paddingLeft: 16,
    paddingRight: 8
  },
  item: {
    borderRadius: 4,
    height: 200,
    marginRight: 32,
    overflow: 'hidden',
    // boxShadow:'rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px',
    width: 180
  },
  placeholder: {
    backgroundColor: colors.infoGrey,
    height: '100%',
    width: '100%'
  },
  image: {
    height: '100%',
    resizeMode: 'cover',
    width: '100%'
  }
});

export default MediaItemScroller;
