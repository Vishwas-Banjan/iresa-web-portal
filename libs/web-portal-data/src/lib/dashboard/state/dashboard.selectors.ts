import { createFeatureSelector, createSelector } from '@ngrx/store';
import { DASHBOARD_FEATURE_KEY, DashboardState } from './dashboard.reducer';

// Lookup the 'Dashboard' feature state managed by NgRx
const getDashboardState = createFeatureSelector<DashboardState>(
  DASHBOARD_FEATURE_KEY
);

const getMenuItems = createSelector(
  getDashboardState,
  (state: DashboardState) => {
    return {
      menuItems: state.menuItems,
      selectedItem: state.selectedMenuItems
    };
  }
);

const getProduct = createSelector(
  getDashboardState,
  (state: DashboardState) => {
    return {
      logoName: state.logoName,
      productName: state.productName
    };
  }
);

const getSearchResults = createSelector(
  getDashboardState,
  (state: DashboardState) => {
    return {
      items: state.searchItems,
      loading: state.searchLoading
    };
  }
);

const getLoading = createSelector(
  getDashboardState,
  (state: DashboardState) => state.loading
);

const getAlbumFromSearch = createSelector(
  getDashboardState,
  (state: DashboardState, props) =>
    state.searchItems.find(item => item.id === props.albumId)
);

export const dashboardQuery = {
  getMenuItems,
  getProduct,
  getSearchResults,
  getLoading,
  getAlbumFromSearch
};
