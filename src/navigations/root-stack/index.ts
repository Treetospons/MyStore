import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ProductListView from '~/views/product/ProductListView';
import ProductItemView from '~/views/product/ProductItemView';
import {StaticParamList} from '@react-navigation/native';

const RootStack = createNativeStackNavigator({
  initialRouteName: 'ProductListScreen',
  screens: {
    ProductListScreen: ProductListView,
    ProductItemScreen: ProductItemView,
  },
});

export type RootStackParams = StaticParamList<typeof RootStack>;
export default RootStack;
