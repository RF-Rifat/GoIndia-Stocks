import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import DiscussionForm from "./DiscussionForm";
import Market from "./Market";
// @ts-ignore
export function TabsDefault() {
  return (
    <Tabs value="discussion">
      {/* @ts-ignore */}
      <TabsHeader className="w-full bg-[#13294f]">
        {/* @ts-ignore */}
        <Tab value={"discussion"}>Discussion</Tab>
        {/* @ts-ignore */}
        <Tab value={"market"}>Market Stories</Tab>
      </TabsHeader>
      {/* @ts-ignore */}
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
