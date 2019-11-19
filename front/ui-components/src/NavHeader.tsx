// Copyright 2018-2019 @paritytech/nomidot authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import React from 'react';

import { polkadotOfficialTheme } from './globalStyle';

interface HeaderProps {
  siteTitle?: string; // pass in a Link directly
}

export const NavHeader = (props: HeaderProps): React.ReactElement => (
  <header
    style={{
      background: '#ffffff',
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 10`,
        maxWidth: 960,
        padding: `1rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <span
          style={{
            color: `${polkadotOfficialTheme.hotPink}`,
            textDecoration: `none`,
          }}
        >
          {props.siteTitle}
        </span>
      </h1>
    </div>
  </header>
);
