import BlockQuote from './BlockQuote';
import Code from './Code';
import CodeBlock from './CodeBlock';
import Emph from './Emph';
import Heading from './Heading';
import Image from './Image';
import Item from './Item';
import Link from './Link';
import List from './List';
import Paragraph from './Paragraph';
import Softbreak from './Softbreak';
import Strong from './Strong';
import Text from './Text';
import ThematicBreak from './ThematicBreak';

const renderers = {
  BlockQuote,
  Code,
  CodeBlock,
  Emph,
  Heading,
  HtmlBlock: () => null,
  HtmlInline: () => null,
  Image,
  Item,
  Link,
  List,
  Paragraph,
  Softbreak,
  Strong,
  Text,
  ThematicBreak,
};

export default renderers;
