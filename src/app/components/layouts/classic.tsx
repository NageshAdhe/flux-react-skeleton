import Link from "next/link";
import Navigation from "../navigation/navigation";
import "./classic.scss";
const ClassicLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const te = [
    {
      id: "analytics",
      title: "Analytics",
      translate: "ANALYTICS",
      type: "link",
      icon: "link",
      url: "/admin/analytics"
    },
    {
      id: "applications",
      title: "Applications",
      translate: "APPLICATIONS",
      type: "group",
      icon: "apps",
      children: [
        {
          id: "academy",
          title: "Academy",
          translate: "ACADEMY",
          type: "link",
          icon: "whatshot",
          url: "/admin/academy",
        },
        {
          id: "messenger",
          title: "Messenger",
          translate: "MESSENGER",
          type: "link",
          icon: "whatshot",
          url: "/messenger",
        }
      ]
    },
    {
      id: "ecommerce",
      title: "E-Commerce",
      translate: "E-COMMERCE",
      type: "collapse",
      icon: "apps",
      children: [
        {
          id: "product",
          title: "Product",
          translate: "PRODUCT",
          type: "link",
          icon: "whatshot",
          url: "/academy"
        },
        {
          id: "productDetails",
          title: "Product Details",
          translate: "PRODUCT DETAILS",
          type: "link",
          icon: "whatshot",
          url: "/messenger"
        },
      ]
    },
  ];
  return (
    <div className=" flex h-screen overflow-hidden">
      {/* LEFT SIDE BAR */}
      <Navigation className="w-full" dense navigation={te} active={""} />
      {/* RIGHT SIDE CONTENT */}
      <div className="main-content">
        <header className="header relative z-20 flex border-b sticky top-0">
          <div className="toolbar container">
            <div className="flex flex-row md:flex-row space-y-4 md:space-x-4 md:space-y-0  px-6">
              <div className="w-full md:w-1/2  p-4 ">Div 1</div>
              <div className="w-full md:w-1/2 p-4 ">Div 2</div>
            </div>
          </div>
        </header>

        <main className="content">
          <div className="Page-header flex container mx-auto mb-6">
            <div className="flex flex-row items-start space-y-8 sm:space-y-0 w-full sm:max-w-full min-w-0 px-6 pt-6">
              <div className="flex-col">
                <nav
                  className="breadcrumb flex w-full mb-2"
                  aria-label="breadcrumb"
                >
                  <ol className="flex list-none m-0 p-0">
                    <li className="MuiBreadcrumbs-li">
                      <Link
                        className="block font-medium tracking-tight capitalize truncate"
                        role="button"
                        href="/"
                      >
                        Home
                      </Link>
                    </li>
                    <li aria-hidden="true" className="px-2">
                      /
                    </li>
                    <li className="MuiBreadcrumbs-li">
                      <Link
                        className="block font-medium tracking-tight capitalize truncate"
                        role="button"
                        href="/apps"
                      >
                        apps
                      </Link>
                    </li>
                    <li aria-hidden="true" className="px-2">
                      /
                    </li>
                    <li className="MuiBreadcrumbs-li">
                      <Link
                        className="block font-medium tracking-tight capitalize truncate"
                        role="button"
                        href="/apps/e-commerce"
                      >
                        e-commerce
                      </Link>
                    </li>
                  </ol>
                </nav>
                <div className="flex items-center max-w-full space-x-12">
                  <div className="flex flex-col min-w-0 mb-6">
                    <p className="text-xl font-bold">
                      A Walk Amongst Friends - Canvas Print
                    </p>
                    <span className="MuiTypography-root MuiTypography-caption font-medium muiltr-1xaxt64">
                      Product Detail
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-1 w-full">BBBBBB</div>
          </div>
          <div className="container mb-6">{children}</div>
        </main>
        <footer className="footer">
          <div className="container">
            <div className="footer-content">
              <a>test@asdasd.com</a>
            </div>
          </div>
        </footer>
        <div className="float-element">
          <div id="fuse-settings-panel" className="setting-panel-btn-wrapper">
            <button className="" type="button">
              <span className="material-icons">settings</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassicLayout;
