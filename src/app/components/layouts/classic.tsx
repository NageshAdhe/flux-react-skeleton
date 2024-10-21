import Navigation from "../navigation/navigation";
import "./classic.scss"
const ClassicLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const te = [
        {
            id: 'analytics',
            title: 'Analytics',
            translate: 'ANALYTICS',
            type: 'link',
            icon: 'link',
            url: '/analytics'
        },
        {
            id: 'applications',
            title: 'Applications',
            translate: 'APPLICATIONS',
            type: 'group',
            icon: 'apps',
            children: [
                {
                    id: 'academy',
                    title: 'Academy',
                    translate: 'ACADEMY',
                    type: 'link',
                    icon: 'whatshot',
                    url: '/academy'
                },
                {
                    id: 'messenger',
                    title: 'Messenger',
                    translate: 'MESSENGER',
                    type: 'link',
                    icon: 'whatshot',
                    url: '/messenger'
                }
            ]
        },
        {
            id: 'ecommerce',
            title: 'E-Commerce',
            translate: 'E-COMMERCE',
            type: 'collapse',
            icon: 'apps',
            children: [
                {
                    id: 'product',
                    title: 'Product',
                    translate: 'PRODUCT',
                    type: 'link',
                    icon: 'whatshot',
                    url: '/academy'
                },
                {
                    id: 'productDetails',
                    title: 'Product Details',
                    translate: 'PRODUCT DETAILS',
                    type: 'link',
                    icon: 'whatshot',
                    url: '/messenger'
                }
            ]
        },

    ];
    return (
        <div className="classic">           
            {/* <!-- Wrapper --> */}
            <div className="wrapper">
                {/* <!-- Header -->*/}
                <Navigation className="w-full" dense navigation={te} active={""} />
                {/* Content */}
                <div className="main-content">
                    {/* RIGHT SIDE CONTENT */}
                    <div className="">
                        <main>{children}</main>
                        <h1 className="text-3xl font-bold underline">
                            Hello world! Classic layout
                        </h1>
                    </div>
                </div>
                {/* Footer */}
                {/* <div className="relative flex flex-0 items-center justify-start w-full h-14 px-4 md:px-6 z-49 border-t bg-card dark:bg-transparent print:hidden">
                    <span className="font-medium text-secondary">Flux</span>
                </div> */}
            </div>
            {/* <!-- Quick chat --> */}
        </div>
    );
};

export default ClassicLayout;