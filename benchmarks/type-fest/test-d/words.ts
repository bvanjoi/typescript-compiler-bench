import {expectType} from '../tsd';
import type {Words} from '../source/words';

expectType<Words<''>>([]);
expectType<Words<'a'>>(['a']);
expectType<Words<'B'>>(['B']);
expectType<Words<'aa'>>(['aa']);
expectType<Words<'aB'>>(['a', 'B']);
expectType<Words<'Ba'>>(['Ba']);
expectType<Words<'BB'>>(['BB']);
expectType<Words<'aaa'>>(['aaa']);
expectType<Words<'aaB'>>(['aa', 'B']);
expectType<Words<'aBa'>>(['a', 'Ba']);
expectType<Words<'aBB'>>(['a', 'BB']);
expectType<Words<'Baa'>>(['Baa']);
expectType<Words<'BaB'>>(['Ba', 'B']);
expectType<Words<'BBa'>>(['B', 'Ba']);
expectType<Words<'BBB'>>(['BBB']);
expectType<Words<'aaaa'>>(['aaaa']);
expectType<Words<'aaaB'>>(['aaa', 'B']);
expectType<Words<'aaBa'>>(['aa', 'Ba']);
expectType<Words<'aaBB'>>(['aa', 'BB']);
expectType<Words<'aBaa'>>(['a', 'Baa']);
expectType<Words<'aBaB'>>(['a', 'Ba', 'B']);
expectType<Words<'aBBa'>>(['a', 'B', 'Ba']);
expectType<Words<'aBBB'>>(['a', 'BBB']);
expectType<Words<'Baaa'>>(['Baaa']);
expectType<Words<'BaaB'>>(['Baa', 'B']);
expectType<Words<'BaBa'>>(['Ba', 'Ba']);
expectType<Words<'BaBB'>>(['Ba', 'BB']);
expectType<Words<'BBaa'>>(['B', 'Baa']);
expectType<Words<'BBaB'>>(['B', 'Ba', 'B']);
expectType<Words<'BBBa'>>(['BB', 'Ba']);
expectType<Words<'BBBB'>>(['BBBB']);
expectType<Words<'aaaaa'>>(['aaaaa']);
expectType<Words<'aaaaB'>>(['aaaa', 'B']);
expectType<Words<'aaaBa'>>(['aaa', 'Ba']);
expectType<Words<'aaaBB'>>(['aaa', 'BB']);
expectType<Words<'aaBaa'>>(['aa', 'Baa']);
expectType<Words<'aaBaB'>>(['aa', 'Ba', 'B']);
expectType<Words<'aaBBa'>>(['aa', 'B', 'Ba']);
expectType<Words<'aaBBB'>>(['aa', 'BBB']);
expectType<Words<'aBaaa'>>(['a', 'Baaa']);
expectType<Words<'aBaaB'>>(['a', 'Baa', 'B']);
expectType<Words<'aBaBa'>>(['a', 'Ba', 'Ba']);
expectType<Words<'aBaBB'>>(['a', 'Ba', 'BB']);
expectType<Words<'aBBaa'>>(['a', 'B', 'Baa']);
expectType<Words<'aBBaB'>>(['a', 'B', 'Ba', 'B']);
expectType<Words<'aBBBa'>>(['a', 'BB', 'Ba']);
expectType<Words<'aBBBB'>>(['a', 'BBBB']);
expectType<Words<'Baaaa'>>(['Baaaa']);
expectType<Words<'BaaaB'>>(['Baaa', 'B']);
expectType<Words<'BaaBa'>>(['Baa', 'Ba']);
expectType<Words<'BaaBB'>>(['Baa', 'BB']);
expectType<Words<'BaBaa'>>(['Ba', 'Baa']);
expectType<Words<'BaBaB'>>(['Ba', 'Ba', 'B']);
expectType<Words<'BaBBa'>>(['Ba', 'B', 'Ba']);
expectType<Words<'BaBBB'>>(['Ba', 'BBB']);
expectType<Words<'BBaaa'>>(['B', 'Baaa']);
expectType<Words<'BBaaB'>>(['B', 'Baa', 'B']);
expectType<Words<'BBaBa'>>(['B', 'Ba', 'Ba']);
expectType<Words<'BBaBB'>>(['B', 'Ba', 'BB']);
expectType<Words<'BBBaa'>>(['BB', 'Baa']);
expectType<Words<'BBBaB'>>(['BB', 'Ba', 'B']);
expectType<Words<'BBBBa'>>(['BBB', 'Ba']);
expectType<Words<'BBBBB'>>(['BBBBB']);

expectType<Words<'hello world'>>(['hello', 'world']);
expectType<Words<'Hello-world'>>(['Hello', 'world']);
expectType<Words<'hello_world'>>(['hello', 'world']);
expectType<Words<'hello  world'>>(['hello', 'world']);
expectType<Words<'Hello--world'>>(['Hello', 'world']);
expectType<Words<'hello__world'>>(['hello', 'world']);
expectType<Words<'   hello  world'>>(['hello', 'world']);
expectType<Words<'---Hello--world'>>(['Hello', 'world']);
expectType<Words<'___hello__world'>>(['hello', 'world']);
expectType<Words<'hello  world   '>>(['hello', 'world']);
expectType<Words<'hello\tworld'>>(['hello', 'world']);
expectType<Words<'Hello--world--'>>(['Hello', 'world']);
expectType<Words<'hello__world___'>>(['hello', 'world']);
expectType<Words<'___ hello -__  _world'>>(['hello', 'world']);
expectType<Words<'__HelloWorld-HELLOWorld helloWORLD'>>(['Hello', 'World', 'HELLO', 'World', 'hello', 'WORLD']);
expectType<Words<'hello WORLD lowercase'>>(['hello', 'WORLD', 'lowercase']);
expectType<Words<'hello WORLD-lowercase'>>(['hello', 'WORLD', 'lowercase']);
expectType<Words<'hello WORLD Uppercase'>>(['hello', 'WORLD', 'Uppercase']);

expectType<Words<'item0'>>(['item', '0']);
expectType<Words<'item01'>>(['item', '01']);
expectType<Words<'item10'>>(['item', '10']);
expectType<Words<'item010'>>(['item', '010']);
expectType<Words<'0item0'>>(['0', 'item', '0']);
expectType<Words<'01item01'>>(['01', 'item', '01']);
expectType<Words<'10item10'>>(['10', 'item', '10']);
expectType<Words<'010item010'>>(['010', 'item', '010']);
expectType<Words<'item0_item_1 item -2'>>(['item', '0', 'item', '1', 'item', '2']);
