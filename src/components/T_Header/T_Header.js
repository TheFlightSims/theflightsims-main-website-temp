'use client';

import {
  Button,
  HeaderMenu,
  Header,
  HeaderContainer,
  HeaderName,
  HeaderNavigation,
  HeaderMenuButton,
  HeaderMenuItem,
  HeaderGlobalBar,
  SkipToContent,
  SideNav,
  SideNavItems,
  HeaderSideNavItems,
} from '@carbon/react';
import { Launch, Credentials } from '@carbon/icons-react';

import Link from 'next/link';

const T_Header = () => (
  <HeaderContainer
    render={({ isSideNavExpanded, onClickSideNavExpand }) => (
      <Header aria-label="Carbon Tutorial">
        <SkipToContent />
        <HeaderMenuButton
          aria-label="Open menu"
          onClick={onClickSideNavExpand}
          isActive={isSideNavExpanded}
        />
        <Link href="/" passHref legacyBehavior>
          <HeaderName prefix="TheFlightSims | ">Home</HeaderName>
        </Link>
        <HeaderNavigation aria-label="Labels">
          <HeaderMenu aria-label="Open Source" menuLinkName="Open Source">
            <HeaderMenuItem
              href="https://opensource.theflightsims.com/"
              target="_blank"
            >
              TheFlightSims Open Source Program <Launch />
            </HeaderMenuItem>
            <HeaderMenuItem
              href="http://labs.theflightsims.com/"
              target="_blank"
            >
              TheFlightSims Labs <Launch />
            </HeaderMenuItem>
            <HeaderMenuItem
              href="https://github.com/tfsarchive"
              target="_blank"
            >
              TheFlightSims Archive Program <Launch />
            </HeaderMenuItem>
          </HeaderMenu>
          <Link
            href="https://people.theflightsims.com"
            target="_blank"
            passHref
            legacyBehavior
          >
            <HeaderMenuItem>
              People in TheFlightSims | Career <Launch />
            </HeaderMenuItem>
          </Link>
        </HeaderNavigation>
        <SideNav
          aria-label="Side navigation"
          expanded={isSideNavExpanded}
          isPersistent={false}
        >
          <SideNavItems>
            <HeaderSideNavItems>
              <HeaderMenu aria-label="Open Source" menuLinkName="Open Source">
                <HeaderMenuItem
                  href="https://opensource.theflightsims.com/"
                  target="_blank"
                >
                  Open Source Program <Launch />
                </HeaderMenuItem>
                <HeaderMenuItem
                  href="http://labs.theflightsims.com/"
                  target="_blank"
                >
                  TheFlightSims Labs <Launch />
                </HeaderMenuItem>
                <HeaderMenuItem
                  href="https://github.com/tfsarchive"
                  target="_blank"
                >
                  Archive Program <Launch />
                </HeaderMenuItem>
              </HeaderMenu>
              <Link
                href="https://people.theflightsims.com"
                target="_blank"
                passHref
                legacyBehavior
              >
                <HeaderMenuItem>
                  People in TheFlightSims | Career <Launch />
                </HeaderMenuItem>
              </Link>
            </HeaderSideNavItems>
          </SideNavItems>
        </SideNav>
        <HeaderGlobalBar>
          <Button
            href="https://myaccount.microsoft.com/?tenantId=9b0960bf-5165-4d51-b526-b9a85d57dedb"
            target="_blank"
            renderIcon={Credentials}
            iconDescription="Credentials"
          >
            Sign-in
          </Button>
        </HeaderGlobalBar>
      </Header>
    )}
  />
);

export default T_Header;
