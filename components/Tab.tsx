import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import DiscussionForm from "./DiscussionForm";
import Market from "./Market";

export function TabsDefault() {
  return (
    <Tabs value="discussion">
      <TabsHeader className="w-full bg-[#13294f]">
        <Tab value={"discussion"}>Discussion</Tab>
        <Tab value={"market"}>Market Stories</Tab>
      </TabsHeader>
      <TabsBody>
        <TabPanel value={"discussion"}>
          <DiscussionForm />
        </TabPanel>
        <TabPanel value={"market"}>
          <Market />
        </TabPanel>
      </TabsBody>
    </Tabs>
  );
}
