import React, {useEffect} from 'react';
import {ms} from 'react-native-size-matters';
import {StyleSheet, View, FlatList} from 'react-native';
import Header from '../Components/Header';
import {connect} from 'react-redux';
import {getItem} from '../Components/Action';
import Spinner from 'react-native-loading-spinner-overlay';
import CardJob from '../Components/CardJob';
import {formatDistanceToNow, format} from 'date-fns';
import {id} from 'date-fns/locale';
function JobPage(props) {
  const {navigation, route} = props;
  const goTo = ({item,rs}) => {
    
    
    navigation.navigate('JobDetail', {
      posisi: item.name,
      perusahaan: item.company.name,
      lokasi:item.province.name,
      status:item.type,
      tanggal:rs,
      label:item.company.logo,
    });
  };
  useEffect(() => {
    props.getItem();
  }, []);
  const ItemSeparatorView = () => {
    return (
      <View
        style={{
          height: ms(15),
        }}
      />
    );
  };
  return (
    <View style={styles.cover}>
      <Header name="Lowongan Pekerjaan" />
      <Spinner
        visible={props.isLoading}
        textContent={'Loading'}
        textStyle={{color: 'black'}}
        size="large"
        color="red"
      />
      <View
        style={{
          paddingLeft: ms(20),
          paddingRight: ms(20),
          flex: 1,
          paddingBottom: ms(20),
        }}>
        <FlatList
          contentContainerStyle={{paddingTop: ms(22)}}
          data={props.ListData}
          keyExtractor={item => item.id}
          ItemSeparatorComponent={ItemSeparatorView}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => {
            let date = item.createdAt;
            let hour1 = date.substring(11, 13);
            let hour2 = date.substring(14, 16);
            let hour3 = date.substring(17, 19);
            let month = date.substring(5, 7);
            let day = date.substring(8, 10);
            let year = date.substring(0, 4);

            if (hour1 == '00') {
              hour1 = 0;
            } else {
              parseInt(hour1);
            }
            if (hour2 == '00') {
              hour2 = 0;
            } else {
              parseInt(hour1);
            }
            if (hour3 == '00') {
              hour3 = 0;
            } else {
              parseInt(hour1);
            }
            if (month[0] == '0') {
              month = month[1];
            } else {
              parseInt(month);
            }
            if (day[0] == '0') {
              day = day[1];
            } else {
              parseInt(day);
            }
            let result = formatDistanceToNow(
              new Date(year, month, day, hour1, hour2, hour3),
              {
                includeSeconds: true,
                locale: id,
              },
            );
            var rs=format(new Date(year, month, day), `d MMMM yyyy`)
            return (
              <CardJob
                company={item.company.name}
                job={item.name}
                date={`Di unggah ${result} yang lalu`}
                minSalary={item.minSalary}
                maxSalary={item.maxSalary}
                location={item.province.name}
                type={item.type}
                onPress={() => goTo({item,rs})}
              />
            );
          }}
        />
      </View>
    </View>
  );
}
const mapStateToProps = state => ({
  ListData: state.dataReducer.ListData,
  isLoading: state.dataReducer.isLoading,
});

const mapDispatchToProps = {
  getItem,
};

export default connect(mapStateToProps, mapDispatchToProps)(JobPage);
const styles = StyleSheet.create({
  cover: {
    width: '100%',
    height: '100%',
    backgroundColor: '#F6F9FB',
  },
  txt: {
    fontSize: ms(20),
    fontWeight: '700',
    fontFamily: 'Poppins-Regular',
  },
});
