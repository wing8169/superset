/**
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

import componentTypes from 'src/dashboard/util/componentTypes';
import { DataMaskStateWithId } from 'src/dataMask/types';
import { Filter, Scope } from '../components/nativeFilters/types';

export enum Scoping {
  All = 'All',
  Specific = 'Specific',
}

export type ChartConfiguration = {
  [chartId: string]: {
    crossFilters: {
      scope: Scope;
    };
  };
};

export interface DashboardInfo {
  id: number;
  json_metadata: string;
}

/** Chart state of redux */
export type Chart = {
  id: number;
  slice_id: string;
  formData: {
    viz_type: string;
  };
};

/** Root state of redux */
export type RootState = {
  charts: { [key: string]: Chart };
  dashboardLayout: { present: { [key: string]: LayoutItem } };
  dashboardFilters: {};
};

/** State of dashboardLayout in redux */
export type Layout = { [key: string]: LayoutItem };

/** State of charts in redux */
export type Charts = { [key: number]: Chart };

type ComponentTypesKeys = keyof typeof componentTypes;
export type ComponentType = typeof componentTypes[ComponentTypesKeys];

/** State of dashboardLayout item in redux */
export type LayoutItem = {
  children: string[];
  parents: string[];
  type: ComponentType;
  id: string;
  meta: {
    chartId: number;
    height: number;
    sliceName?: string;
    text?: string;
    uuid: string;
    width: number;
  };
};

export type FilterSet = {
  id: string;
  name: string;
  nativeFilters: Filters;
  dataMask: Partial<DataMaskStateWithId>;
};

export type FilterSets = {
  [filtersSetId: string]: FilterSet;
};

export type Filters = {
  [filterId: string]: Filter;
};

export type NativeFiltersState = {
  filters: Filters;
  filterSets: FilterSets;
};
