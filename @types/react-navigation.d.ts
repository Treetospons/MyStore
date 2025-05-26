import {RootStackParams} from '~/navigations/root-stack';
import {TProductItemView} from '~/views/product/ProductItemView';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParams {
      readonly ProductItemScreen: TProductItemView;
      [key: string]: object | undefined;
    }
  }
}
