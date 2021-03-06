
/**
 * Food Delivery - React Native Template
 *
 * @format
 * @flow
 */

// import dependencies
import React, {Component} from 'react';
import {
  FlatList,
  ImageBackground,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Color from 'color';

// import utils
import getImgSource from '../../utils/getImgSource.js';

// import components
import TouchableItem from '../../components/TouchableItem';
import CreditCard from '../../components/creditcard/CreditCard';

// import colors
import Colors from '../../theme/colors';

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  container: {
    flex: 1,
  },
  contentContainerStyle: {
    paddingVertical: 10,
    paddingHorizontal: 16,
  },
  cardImg: {borderRadius: 4},
  card: {
    marginVertical: 6,
    height: 100,
    resizeMode: 'cover',
  },
  cardOverlay: {
    flex: 1,
    borderRadius: 4,
    backgroundColor: Color(Colors.overlayColor).alpha(0.2),
    overflow: 'hidden',
  },
  cardContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    borderRadius: 4,
  },
  cardTitle: {
    padding: 16,
    fontWeight: '700',
    fontSize: 18,
    color: Colors.white,
    textShadowColor: 'rgba(0, 0, 0, 0.88)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10,
  },
  defaultPaymentContainer: {
    marginTop: 8,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
    paddingTop: 24,
    paddingBottom: 8,
    backgroundColor: Color(Colors.primaryColor).alpha(0.1),
  },
});

export default class CategoriesA extends Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: [
        {
          key: 1,
          imageUri: require('../../assets/patches/Albumin/3.png'),
          name: 'Albumin',
          link: 'AlbuminInfo',

        },
        {
          key: 2,
          imageUri: require('../../assets/patches/AscorbicAcid/4.png'),
          name: 'Ascorbic Acid',
          link: 'AscorbicAcidInfo',
        },
        {
          key: 3,
          imageUri: require('../../assets/patches/Bilirubin/1.png'),
          name: 'Bilirubin',
          link: 'BilirubinInfo',
        },
        {
          key: 4,
          imageUri: require('../../assets/patches/Blood/1.png'),
          name: 'Blood',
          link: 'BloodInfo',
        },
        {
          key: 5,
          imageUri: require('../../assets/patches/Calcium/2.png'),
          name: 'Calcium',
          link: 'CalciumInfo',
        },
        {
          key: 6,
          imageUri: require('../../assets/patches/Creatine/5.png'),
          name: 'Creatine',
          link: 'CreatineInfo',
        },
        {
          key: 7,
          imageUri: require('../../assets/patches/Glucose/2.png'),
          name: 'Glucose',
          link: 'GlucoseInfo',
        },
        {
          key: 8,
          imageUri: require('../../assets/patches/Ketone/4.png'),
          name: 'Ketone',
          link: 'KetoneInfo',
        },
        {
          key: 9,
          imageUri: require('../../assets/patches/Leukocyte/5.png'),
          name: 'Leukocyte',
          link: 'LeukocyteInfo',
        },
        {
          key: 10,
          imageUri: require('../../assets/patches/Nitrite/1.png'),
          name: 'Nitrite',
          link: 'NitriteInfo',
        },
        {
          key: 11,
          imageUri: require('../../assets/patches/Protein/2.png'),
          name: 'Protein',
          link: 'ProteinInfo',
        },
        {
          key: 12,
          imageUri: require('../../assets/patches/PHLevel/2.png'),
          name: 'PH Level',
          link: 'PHLevelInfo',
        },

        {
          key: 13,
          imageUri: require('../../assets/patches/SpecificGravity/6.png'),
          name: 'Specific Gravity',
          link: 'SpecificGravityInfo',
        },
        {
          key: 14,
          imageUri: require('../../assets/patches/Urobilinogen/2.png'),
          name: 'Urobilinogen',
          link: 'UrobilinogenInfo',
        },

      ],
    };
  }

  goBack = () => {
    const {navigation} = this.props;
    navigation.goBack();
  };

  navigateTo = screen => () => {

    const {navigation} = this.props;
    navigation.navigate(screen);
  };

  keyExtractor = (item, index) => index.toString();

  renderCategoryItem = ({item, index}) => (

    <ImageBackground
      key={index}
      source={getImgSource(item.imageUri)}
      imageStyle={styles.cardImg}
      style={styles.card}>
      <View style={styles.cardOverlay}>
        <TouchableItem
          onPress={this.navigateTo(item.link)}
          style={styles.cardContainer}
          // borderless
        >
          <Text style={styles.cardTitle}>{item.name}</Text>
        </TouchableItem>
      </View>
    </ImageBackground>
  );

  render() {
    const {categories} = this.state;

    return (
      <SafeAreaView style={styles.screenContainer}>
        <StatusBar
          backgroundColor={Colors.statusBarColor}
          barStyle="dark-content"
        />
        <View style={styles.defaultPaymentContainer}>


            <CreditCard

              cardHolder="Mission Urine Strip"
              colors={['#85C1E9', '#2874A6']}
            />
          </View>

        <View style={styles.container}>
          <FlatList
            data={categories}
            showsHorizontalScrollIndicator={false}
            alwaysBounceHorizontal={false}
            keyExtractor={this.keyExtractor}
            renderItem={this.renderCategoryItem}
            contentContainerStyle={styles.contentContainerStyle}
          />
        </View>
      </SafeAreaView>
    );
  }
}
