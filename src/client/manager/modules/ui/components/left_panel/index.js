import React from 'react';
import Header from './header';
import Stories from './stories';
import TextFilter from './text_filter';
import pick from 'lodash.pick';

const scrollStyle = {
  height: 'calc(100vh - 105px)',
  marginTop: 10,
  overflowY: 'auto',
};

const mainStyle = {
  padding: 20,
};

const storyProps = ['stories', 'selectedKind', 'selectedStory', 'onSelectStory'];

const LeftPanel = (props) => (
  <div style={mainStyle}>
    <Header openShortcutsHelp={props.openShortcutsHelp} />
    <TextFilter
      text={props.storyFilter}
      onClear={() => props.onStoryFilter('')}
      onChange={(text) => props.onStoryFilter(text)}
    />
    <div style={scrollStyle}>
      {props.stories ? (<Stories {...pick(props, storyProps)} />) : null}
    </div>
  </div>
);

LeftPanel.propTypes = {
  stories: React.PropTypes.array,
  selectedKind: React.PropTypes.string,
  selectedStory: React.PropTypes.string,
  onSelectStory: React.PropTypes.func,

  storyFilter: React.PropTypes.string,
  onStoryFilter: React.PropTypes.func,

  openShortcutsHelp: React.PropTypes.func,
};

export default LeftPanel;
