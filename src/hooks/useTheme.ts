import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, RootState} from '~/stores';
import {setAppTheme} from '~/stores/reducers/theme/themeSlice';

const useAppDispatch = useDispatch.withTypes<AppDispatch>();
const useAppSelector = useSelector.withTypes<RootState>();

const useTheme = () => {
  const {appTheme} = useAppSelector(state => state.themeReducer.themeSlice);
  const dispatch = useAppDispatch();

  const onSetAppTheme = (theme: 'Dark' | 'Light') => {
    dispatch(setAppTheme({appTheme: theme}));
  };

  return {
    appTheme,
    setAppTheme: onSetAppTheme,
  };
};

export default useTheme;
