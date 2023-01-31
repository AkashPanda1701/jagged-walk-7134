import SidebarWithHeader from "../../components/Admin/Sidebar"
import Display from "../../components/Admin/Display"
import ViewItem from "../../components/Admin/ViewItem"


function admin() {
    return (
        <>  
            <SidebarWithHeader >
                {<ViewItem/>}
            </SidebarWithHeader>

        </>
    )
}

export default admin