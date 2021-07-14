import React from 'react';
import {
  ScrollView,
  StyleSheet, View
} from 'react-native';
import { DUMffour, DUMfone, DUMfthree } from '../../assets';
import { FoodCard, Gap, HomeProfile, HomeTabSection } from '../../components';

const Home = () => {
 
  return (
   
<View style={styles.page}>
     <HomeProfile />
      <View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.foodcard}>
            <Gap width={24} />
            <FoodCard image={DUMfone} />
            <FoodCard image={DUMffour} />
            <FoodCard image={DUMfthree} />
            <Gap width={24} />
          </View>
        </ScrollView>
      </View>

      <View style={styles.tabContainer}>
      <HomeTabSection />
      </View>
    </View>
 
    
  );
};

export default Home;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },

  
  profile: {
    width: 50,
    height: 50,
    borderRadius: 8,
  },
  foodcard: {
    flexDirection: 'row',
    marginTop: 24,
    marginBottom: 24,
  },
  tabContainer: {
    flex: 1,
  },
});
