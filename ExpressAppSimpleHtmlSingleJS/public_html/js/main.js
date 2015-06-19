 $(function() {
            var pstyle = 'border: 1px solid #dfdfdf; padding: 5px;';
            $('#layout').w2layout({
                name: 'layout',
                panels: [{
                    type: 'top',
                    size: 50,
                    resizable: true,
                    style: pstyle,
                    content: '<div id="toolbar" style="padding: 4px; border: 1px solid silver; border-radius: 3px"></div>'
                }, {
                    type: 'left',
                    size: 200,
                    resizable: true,
                    style: pstyle,
                    content: '<div id="sidebar" style="height: 300px; width: 200px;"></div>'
                }, {
                    type: 'right',
                    size: 200,
                    resizable: true,
                    style: pstyle,
                    content: 'right',
                }, {
                    type: 'main',
                    style: pstyle + 'border-top: 0px;',
                    content: 'main',
                    tabs: {
                        active: 'tab1',
                        tabs: [{
                            id: 'tab1',
                            caption: 'Tab 1'
                        }, {
                            id: 'tab2',
                            caption: 'Tab 2'
                        }, {
                            id: 'tab3',
                            caption: 'Tab 3'
                        }, ],
                        onClick: function(event) {
                            this.owner.content('main', event);
                        }
                    }
                }]
            });
            $('#sidebar').w2sidebar({
                name: 'sidebar',
                nodes: [{
                    id: 'level-1',
                    text: 'Level 1',
                    img: 'icon-folder',
                    expanded: true,
                    group: true,
                    nodes: [{
                        id: 'level-1-1',
                        text: 'Level 1.1',
                        icon: 'fa-home'
                    }, {
                        id: 'level-1-2',
                        text: 'Level 1.2',
                        icon: 'fa-star'
                    }, {
                        id: 'level-1-3',
                        text: 'Level 1.3',
                        icon: 'fa-star-empty'
                    }]
                }, {
                    id: 'level-2',
                    text: 'Level 2',
                    img: 'icon-folder',
                    expanded: true,
                    group: true,
                    nodes: [{
                        id: 'level-2-1',
                        text: 'Level 2.1',
                        img: 'icon-folder',
                        count: 3,
                        nodes: [{
                            id: 'level-2-1-1',
                            text: 'Level 2.1.1',
                            icon: 'fa-star-empty'
                        }, {
                            id: 'level-2-1-2',
                            text: 'Level 2.1.2',
                            icon: 'fa-star-empty',
                            count: 67
                        }, {
                            id: 'level-2-1-3',
                            text: 'Level 2.1.3',
                            icon: 'fa-star-empty'
                        }]
                    }, {
                        id: 'level-2-2',
                        text: 'Level 2.2',
                        icon: 'fa-star-empty'
                    }, {
                        id: 'level-2-3',
                        text: 'Level 2.3',
                        icon: 'fa-star-empty'
                    }]
                }]
            });
            $('#toolbar').w2toolbar({
                name: 'toolbar',
                items: [{
                    type: 'button',
                    id: 'item1',
                    caption: 'Item 1',
                    img: 'icon-page',
                    hint: 'Hint for item 1'
                }, {
                    type: 'button',
                    id: 'item2',
                    caption: 'Item 2',
                    icon: 'fa-wrench',
                    hint: 'Hint for item 2'
                }, {
                    type: 'button',
                    id: 'item3',
                    caption: 'Item 3',
                    icon: 'fa-star-empty',
                    hint: 'Hint for item 3'
                }, {
                    type: 'button',
                    id: 'item4',
                    caption: 'Item 4',
                    icon: 'fa-comments',
                    hint: 'Hint for item 4'
                }, {
                    type: 'button',
                    id: 'item5',
                    caption: 'Item 5',
                    icon: 'fa-beaker',
                    hint: 'Hint for item 5'
                }],
                onClick: function(event) {
                    console.log('Target: ' + event.target, event);
                }
            });
            var doubleGrid = '<div style="position: relative; height: 300px;">' +
                '<div id="grid1" style="position: absolute; left: 0px; width: 49.9%; height: 300px;"></div>' +
                '<div id="grid2" style="position: absolute; right: 0px; width: 49.9%; height: 300px;"></div>' +
                '</div>';
            //setTimeout(function(){
            w2ui['layout'].content('main', doubleGrid);

            $('#grid1').w2grid({
                name: 'grid1',
                header: 'Master',
                show: {
                    header: true
                },
                columns: [{
                    field: 'recid',
                    caption: 'ID',
                    size: '50px',
                    sortable: true,
                    attr: 'align=center'
                }, {
                    field: 'lname',
                    caption: 'Last Name',
                    size: '30%',
                    sortable: true
                }, {
                    field: 'fname',
                    caption: 'First Name',
                    size: '30%',
                    sortable: true
                }, {
                    field: 'email',
                    caption: 'Email',
                    size: '40%'
                }, {
                    field: 'sdate',
                    caption: 'Start Date',
                    size: '120px'
                }, ],
                records: [{
                    recid: 1,
                    fname: 'John',
                    lname: 'doe',
                    email: 'jdoe@gmail.com',
                    sdate: '4/3/2012'
                }, {
                    recid: 2,
                    fname: 'Stuart',
                    lname: 'Motzart',
                    email: 'motzart@hotmail.com',
                    sdate: '4/3/2012'
                }, {
                    recid: 3,
                    fname: 'Jin',
                    lname: 'Franson',
                    email: 'jin@yahoo.com',
                    sdate: '4/3/2012'
                }, {
                    recid: 4,
                    fname: 'Susan',
                    lname: 'Ottie',
                    email: 'sottie@yahoo.com',
                    sdate: '4/3/2012'
                }, {
                    recid: 5,
                    fname: 'Kelly',
                    lname: 'Silver',
                    email: 'kelly@gmail.com',
                    sdate: '4/3/2012'
                }, {
                    recid: 6,
                    fname: 'Francis',
                    lname: 'Gatos',
                    email: 'frank@apple.com',
                    sdate: '4/3/2012'
                }],
                onClick: function(event) {
                    w2ui['grid2'].clear();
                    var record = this.get(event.recid);
                    w2ui['grid2'].add([{
                        recid: 0,
                        name: 'ID:',
                        value: record.recid
                    }, {
                        recid: 1,
                        name: 'First Name:',
                        value: record.fname
                    }, {
                        recid: 2,
                        name: 'Last Name:',
                        value: record.lname
                    }, {
                        recid: 3,
                        name: 'Email:',
                        value: record.email
                    }, {
                        recid: 4,
                        name: 'Date:',
                        value: record.sdate
                    }]);
                }
            });
            $('#grid2').w2grid({
                header: 'Details',
                show: {
                    header: true,
                    columnHeaders: false
                },
                name: 'grid2',
                columns: [{
                    field: 'name',
                    caption: 'Name',
                    size: '100px',
                    style: 'background-color: #efefef; border-bottom: 1px solid white; padding-right: 5px;',
                    attr: "align=right"
                }, {
                    field: 'value',
                    caption: 'Value',
                    size: '100%'
                }]
            });
        }, 1000);
