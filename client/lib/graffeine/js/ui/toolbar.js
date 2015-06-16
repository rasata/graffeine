/**
 *  Tool Menu
 *
 *  Buttons Across Top
 *
**/

Graffeine.ui.toolbar = (function(G) { 

    var self = this;
    var ui = G.ui;

    var data = { 
        selectors: { 
            target:  "#toolbar-container",
            content: "#toolbar-content",
            logoMenu: { 
                content: "#about-content"
            },
            graphMenu: { 
                initGraph: "#init-graph",
                clearGraph: "#init-graph-clear",
                initStats: "#init-stats",
                setttings: "#init-settings"
            },
            nodeMenu: { 
                nodeAdd: "#node-add",
                nodeFind: "#node-find",
                nodeOrphans: "#node-orphans"
            },
            buttons: { 
                force: "#graph-force",
                mode: "#graph-mode"
            }
        },
        viewURL: G.config.root + "html/toolbar.html"
    };

    init();

    function init() { 
        load(handler);
    };

    function load(callback) { 
        ui.util.loadPartial(data.viewURL, data.selectors.target, callback);
    };

    function handler() { 

        var graph = G.graph;
        var util = G.util;

        /**
         *  About Menu
        **/

        ui.util.modal(data.selectors.logoMenu.content);

        /**
         * Toolbar buttons on the top right
        **/

        ui.util.event(data.selectors.buttons.mode, "click", function(e) { 
            var mode = ui.util.toggleButton(data.selectors.buttons.mode, ["replace", "update"]);
            graph.replace = (mode==="replace") ? true : false;
        });

        /**
         *  Force Button On/Off
        **/

        ui.util.event(data.selectors.buttons.force, "click", function(e) { 
            if(ui.state.forceActive())
                G.svg.forceStop();
            else
                G.svg.forceStart();
        });

        /**
         *  Logo Menu drop-down options
        **/

        /**
         *  Graph Menu drop-down options
        **/

        ui.util.event(data.selectors.graphMenu.initGraph, "click", function(e) { 
            Graffeine.command.send("graph-init", {});
        });

        ui.util.event(data.selectors.graphMenu.clearGraph, "click", function(e) { 
            graph.clear();
        });

        ui.util.event(data.selectors.graphMenu.initStats, "click", function(e) { 
            ui.graphStats.show();
        });

        ui.util.event(data.selectors.graphMenu.setttings, "click", function(e) { 
            // open settings modal
            // save session settings

/**
            var mode = ui.util.toggleButton(data.selectors.buttons.source, ["local", "remote"]);
            if(mode==="local") { 
                graph.temp = graph.socket;
                graph.socket = Fake.socket;
            }
            else { 
                graph.socket = graph.temp;
                graph.temp = null;
            }
**/
       });
                /**
         *  Node Menu drop-down options
        **/

        ui.util.event(data.selectors.nodeMenu.nodeAdd, 'click', function(e) { 
            // @todo: set up new (empty) node here;
            ui.nodeEdit.show();
        });

        ui.util.event(data.selectors.nodeMenu.nodeFind, 'click', function(e) { 
            // show find node menu
            // send find node command
        });

        ui.util.event(data.selectors.nodeMenu.nodeOrphans, 'click', function(e) { 
            Graffeine.command.send('nodes-orphans', { });
        });

        /** disable buttons that rely on a graph being present **/

        ui.util.disableGraphButtons();

    };

    return { 
        show: function() { },
        hide: function() { }
    };

}(Graffeine));