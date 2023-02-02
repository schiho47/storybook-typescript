import * as React from "react";
import MuiTimeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";

interface TimelineProps {
  timeLineItems: {
    color:
      | "inherit"
      | "grey"
      | "primary"
      | "secondary"
      | "error"
      | "info"
      | "success"
      | "warning";
    label: string;
  }[];
}
const Timeline: React.FC<TimelineProps> = ({ timeLineItems }) => {
  return (
    <MuiTimeline position="alternate">
      {timeLineItems.map((item) => {
        return (
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot color={item.color} />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>{item.label}</TimelineContent>
          </TimelineItem>
        );
      })}
    </MuiTimeline>
  );
};

export default Timeline;
