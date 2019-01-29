/*
Error: Invalid CSS after "#": expected id name, was " Changelog"
        on line 1 of CHANGELOG.md

1: # Changelog
2: 
3: All notable changes to this project will be documented in this file.
4: 
5: This project adheres to [Semantic Versioning](http://semver.org/).
6: 

Backtrace:
CHANGELOG.md:1
/Library/Ruby/Gems/2.3.0/gems/sass-3.4.25/lib/sass/scss/parser.rb:1207:in `expected'
/Library/Ruby/Gems/2.3.0/gems/sass-3.4.25/lib/sass/scss/parser.rb:1137:in `expected'
/Library/Ruby/Gems/2.3.0/gems/sass-3.4.25/lib/sass/scss/parser.rb:1132:in `tok!'
/Library/Ruby/Gems/2.3.0/gems/sass-3.4.25/lib/sass/scss/static_parser.rb:203:in `id_selector'
/Library/Ruby/Gems/2.3.0/gems/sass-3.4.25/lib/sass/scss/static_parser.rb:159:in `simple_selector_sequence'
/Library/Ruby/Gems/2.3.0/gems/sass-3.4.25/lib/sass/scss/static_parser.rb:111:in `selector'
/Library/Ruby/Gems/2.3.0/gems/sass-3.4.25/lib/sass/scss/static_parser.rb:86:in `selector_comma_sequence'
/Library/Ruby/Gems/2.3.0/gems/sass-3.4.25/lib/sass/scss/parser.rb:1115:in `expr!'
/Library/Ruby/Gems/2.3.0/gems/sass-3.4.25/lib/sass/scss/static_parser.rb:20:in `parse_selector'
/Library/Ruby/Gems/2.3.0/gems/sass-3.4.25/lib/sass/tree/visitors/perform.rb:428:in `visit_rule'
/Library/Ruby/Gems/2.3.0/gems/sass-3.4.25/lib/sass/tree/visitors/base.rb:36:in `visit'
/Library/Ruby/Gems/2.3.0/gems/sass-3.4.25/lib/sass/tree/visitors/perform.rb:162:in `block in visit'
/Library/Ruby/Gems/2.3.0/gems/sass-3.4.25/lib/sass/stack.rb:79:in `block in with_base'
/Library/Ruby/Gems/2.3.0/gems/sass-3.4.25/lib/sass/stack.rb:115:in `with_frame'
/Library/Ruby/Gems/2.3.0/gems/sass-3.4.25/lib/sass/stack.rb:79:in `with_base'
/Library/Ruby/Gems/2.3.0/gems/sass-3.4.25/lib/sass/tree/visitors/perform.rb:162:in `visit'
/Library/Ruby/Gems/2.3.0/gems/sass-3.4.25/lib/sass/tree/visitors/base.rb:52:in `block in visit_children'
/Library/Ruby/Gems/2.3.0/gems/sass-3.4.25/lib/sass/tree/visitors/base.rb:52:in `map'
/Library/Ruby/Gems/2.3.0/gems/sass-3.4.25/lib/sass/tree/visitors/base.rb:52:in `visit_children'
/Library/Ruby/Gems/2.3.0/gems/sass-3.4.25/lib/sass/tree/visitors/perform.rb:171:in `block in visit_children'
/Library/Ruby/Gems/2.3.0/gems/sass-3.4.25/lib/sass/tree/visitors/perform.rb:183:in `with_environment'
/Library/Ruby/Gems/2.3.0/gems/sass-3.4.25/lib/sass/tree/visitors/perform.rb:170:in `visit_children'
/Library/Ruby/Gems/2.3.0/gems/sass-3.4.25/lib/sass/tree/visitors/base.rb:36:in `block in visit'
/Library/Ruby/Gems/2.3.0/gems/sass-3.4.25/lib/sass/tree/visitors/perform.rb:190:in `visit_root'
/Library/Ruby/Gems/2.3.0/gems/sass-3.4.25/lib/sass/tree/visitors/base.rb:36:in `visit'
/Library/Ruby/Gems/2.3.0/gems/sass-3.4.25/lib/sass/tree/visitors/perform.rb:161:in `visit'
/Library/Ruby/Gems/2.3.0/gems/sass-3.4.25/lib/sass/tree/visitors/perform.rb:10:in `visit'
/Library/Ruby/Gems/2.3.0/gems/sass-3.4.25/lib/sass/tree/root_node.rb:36:in `css_tree'
/Library/Ruby/Gems/2.3.0/gems/sass-3.4.25/lib/sass/tree/root_node.rb:29:in `render_with_sourcemap'
/Library/Ruby/Gems/2.3.0/gems/sass-3.4.25/lib/sass/engine.rb:384:in `_render_with_sourcemap'
/Library/Ruby/Gems/2.3.0/gems/sass-3.4.25/lib/sass/engine.rb:301:in `render_with_sourcemap'
/Library/Ruby/Gems/2.3.0/gems/sass-3.4.25/lib/sass/exec/sass_scss.rb:391:in `run'
/Library/Ruby/Gems/2.3.0/gems/sass-3.4.25/lib/sass/exec/sass_scss.rb:63:in `process_result'
/Library/Ruby/Gems/2.3.0/gems/sass-3.4.25/lib/sass/exec/base.rb:52:in `parse'
/Library/Ruby/Gems/2.3.0/gems/sass-3.4.25/lib/sass/exec/base.rb:19:in `parse!'
/Library/Ruby/Gems/2.3.0/gems/sass-3.4.25/bin/sass:13:in `<top (required)>'
/usr/local/bin/sass:23:in `load'
/usr/local/bin/sass:23:in `<main>'
*/
body:before {
  white-space: pre;
  font-family: monospace;
  content: "Error: Invalid CSS after \"#\": expected id name, was \" Changelog\"\A         on line 1 of CHANGELOG.md\A \A 1: # Changelog\A 2: \A 3: All notable changes to this project will be documented in this file.\A 4: \A 5: This project adheres to [Semantic Versioning](http://semver.org/).\A 6: "; }
