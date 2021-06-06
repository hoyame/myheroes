/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {
  RefreshControl,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faTimesCircle,
  faCheckCircle,
} from '@fortawesome/free-regular-svg-icons';
import {d1, d2, d3, refresh} from './App';

let loading = false;

const Page = () => {
  const [AlertList, setAlertList] = useState([]);
  const [InformationsH24, setInformationsH24] = useState([]);
  const [InformationsH24AV, setInformationsH24AV] = useState([]);

  interface IN {
    id: number;
    name: string;
    identifier: string;
    description: string;
    hour: number;
    city: string;
    departement: string,
    source: string;
    rate: number;
    level: number;
    latitude: number;
    longitude: number;
  }

  const AlertProps = (props: IN) => {
    return (
      <View
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: 15,
          borderRadius: 15,
          marginBottom: 10,
          backgroundColor: '#d80000',
        }}>
        <View>
          <Text>{props.id}</Text>
          <Text>{props.source}</Text>
          <Text>{props.description}</Text>
          <Text>{props.hour}</Text>
          <Text>{props.departement} - {props.city}</Text>
        </View>

        <View>
          <TouchableOpacity
            onPress={() => {
              var params = {
                identifier: props.identifier,
                level: props.level,
                source: props.source,
                latitude: props.latitude,
                longitude: props.longitude,
                description: props.description,
              };

              let req = {
                method: 'POST',
                headers: {
                  Accept: 'application/json',
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(params),
              };

              fetch('http://176.31.230.112:3333/alerts/remove', req)
                .then(function (res) {
                  console.log(res);
                })

                .catch(function (err) {
                  console.log('errror', err);
                });

              setTimeout(() => {
                refresh();
                setTimeout(() => {
                  setAlertList(d1);
                  setInformationsH24(d2);
                  setInformationsH24AV(d3);
                  setRefreshing(false);
                }, 3000);
              }, 4000);
            }}>
            <FontAwesomeIcon size={30} icon={faTimesCircle} />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const NewsProps = (props: IN) => {
    return (
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: 15,
          borderRadius: 15,
          marginBottom: 10,
          backgroundColor: '#366BF8',
        }}>
        <View>
          <Text>0</Text>
          <Text>{props.name}</Text>
          <Text>{props.description}</Text>
          <Text>{props.hour}</Text>
          <Text>{props.departement} - {props.city}</Text>
        </View>

        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
          }}>
          <TouchableOpacity
            onPress={() => {
              var params = {
                name: props.name,
                rate: props.rate,
                description: props.description,
                latitude: props.latitude,
                longitude: props.longitude,
                city: props.city,
                departement: props.departement
              };

              let req = {
                method: 'POST',
                headers: {
                  Accept: 'application/json',
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(params),
              };

              fetch('http://176.31.230.112:3333/list/approvate', req)
                .then(function (res) {
                  console.log(res);
                })

                .catch(function (err) {
                  console.log('errror', err);
                });

              setTimeout(() => {
                refresh();
                setTimeout(() => {
                  setAlertList(d1);
                  setInformationsH24(d2);
                  setInformationsH24AV(d3);
                  setRefreshing(false);
                }, 3000);
              }, 4000);
            }}>
            <FontAwesomeIcon
              style={{marginRight: 10}}
              size={30}
              icon={faCheckCircle}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              var params = {
                name: props.name,
                rate: props.rate,
                description: props.description,
                latitude: props.latitude,
                longitude: props.longitude,
                city: props.city,
                departement: props.departement
              };

              let req = {
                method: 'POST',
                headers: {
                  Accept: 'application/json',
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(params),
              };

              fetch('http://176.31.230.112:3333/list/delete', req)
                .then(function (res) {
                  console.log(res);
                })

                .catch(function (err) {
                  console.log('errror', err);
                });

              setTimeout(() => {
                refresh();
                setTimeout(() => {
                  setAlertList(d1);
                  setInformationsH24(d2);
                  setInformationsH24AV(d3);
                  setRefreshing(false);
                }, 3000);
              }, 4000);
            }}>
            <FontAwesomeIcon size={30} icon={faTimesCircle} />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const NewsProps2 = (props: IN) => {
    return (
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: 15,
          borderRadius: 15,
          marginBottom: 10,
          backgroundColor: '#138D0B',
        }}>
        <View>
          <Text>0</Text>
          <Text>{props.name}</Text>
          <Text>{props.description}</Text>
          <Text>{props.hour}</Text>
          <Text>{props.departement} - {props.city}</Text>
        </View>

        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
          }}>
          <TouchableOpacity
            onPress={() => {
              var params = {
                name: props.name,
                rate: props.rate,
                description: props.description,
                latitude: props.latitude,
                longitude: props.longitude,
                city: props.city,
                departement: props.departement
              };

              let req = {
                method: 'POST',
                headers: {
                  Accept: 'application/json',
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(params),
              };

              fetch('http://176.31.230.112:3333/list/deleteApprovate', req)
                .then(function (res) {
                  console.log(res);
                })

                .catch(function (err) {
                  console.log('errror', err);
                });

              setTimeout(() => {
                refresh();
                setTimeout(() => {
                  setAlertList(d1);
                  setInformationsH24(d2);
                  setInformationsH24AV(d3);
                  setRefreshing(false);
                }, 3000);
              }, 4000);
            }}>
            <FontAwesomeIcon size={30} icon={faTimesCircle} />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  // eslint-disable-next-line no-undef
  useEffect(() => {
    if (loading === false) {
      refresh();
      setTimeout(() => {
        setAlertList(d1);
        setInformationsH24(d2);
        setInformationsH24AV(d3);
        setRefreshing(false);
      }, 3000);
      loading = true;
    }
  });

  setTimeout(() => {
    setAlertList(d1);
    setInformationsH24(d2);
    setInformationsH24AV(d3);
  }, 2000);

  const returnAlerts = () => {
    return AlertList.map((v, k) => {
      return <AlertProps key={k} {...v} />;
    });
  };

  const returnNews = () => {
    return InformationsH24.map((v, k) => {
      return <NewsProps key={k} {...v} />;
    });
  };

  const returnNews2 = () => {
    return InformationsH24AV.map((v, k) => {
      return <NewsProps2 key={k} {...v} />;
    });
  };

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);

    refresh();
    setTimeout(() => {
      setAlertList(d1);
      setInformationsH24(d2);
      setInformationsH24AV(d3);
      setRefreshing(false);
    }, 3000);
  }, []);

  const [refreshing, setRefreshing] = React.useState(false);

  return (
    <View
      style={{
        paddingTop: 60,
        padding: 35,
      }}>
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        <Text
          style={{
            fontSize: 30,
            fontWeight: '600',
            marginBottom: 30,
          }}>
          Alertes
        </Text>

        {returnAlerts()}

        <Text
          style={{
            fontSize: 30,
            fontWeight: '600',
            marginTop: 20,
            marginBottom: 30,
          }}>
          News a approuver
        </Text>

        {returnNews()}

        <Text
          style={{
            fontSize: 30,
            fontWeight: '600',
            marginTop: 20,
            marginBottom: 30,
          }}>
          News approuvées
        </Text>

        {returnNews2()}
      </ScrollView>
    </View>
  );
};

export default Page;
