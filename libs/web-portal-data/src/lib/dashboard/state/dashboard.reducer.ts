import { DashboardAction, DashboardActionTypes } from './dashboard.actions';
import { MenuItem } from '@iresa/shared/ui';
import { menuItems } from './config/menu-items';

export const DASHBOARD_FEATURE_KEY = 'dashboard';

/**
 * Interface for the 'Dashboard' data used in
 *  - DashboardState, and the reducer function
 *
 *  Note: replace if already defined in another module
 */

export interface DashboardState {
  menuItems: MenuItem[];
  selectedMenuItems: string;
  logoName: string;
  productName: string;
  searchItems: any[];
  searchLoading: boolean;
}

export interface DashboardPartialState {
  readonly [DASHBOARD_FEATURE_KEY]: DashboardState;
}

export const initialState: DashboardState = {
  menuItems: menuItems,
  selectedMenuItems: menuItems[0].title,
  logoName: 'Iresa',
  productName: 'Portal',
  searchItems: [],
  searchLoading: false
};

export function reducer(
  state: DashboardState = initialState,
  action: DashboardAction
): DashboardState {
  switch (action.type) {
    case DashboardActionTypes.Search: {
      state = {
        ...state,
        searchLoading: true
      };
      break;
    }
    case DashboardActionTypes.SearchSuccess: {
      state = {
        ...state,
        searchLoading: false,
        searchItems: action.payload
      };
      break;
    }
    case DashboardActionTypes.SearchError: {
      state = {
        ...state,
        searchLoading: false,
        searchItems: []
      };
      break;
    }
  }
  return state;
}
