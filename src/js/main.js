$(function() {
  var init = {state: 'resume',
    response: [{target_id: '219572_R1', token_id: 'A'}, {target_id: '219572_R3', token_id: 'B'}]
  }
  validation = {
    'img_src': '',
    "possible_responses" : [
    {
      "item_type" : "token",
      "item_id" : "A",
      "text" : "Builds in previous problems and inefficiences",
      "border_color" : "#000000",
      "background_color" : "#FFFFFF",
      "text_alignment" : "center",
      "font_size" : "9",
      "text_color" : "#000000",
      "width" : 180,
      "height" : 52,
      "x" : 10,
      "y" : 70,
      "multiple_use": true
    },
    {
      "item_type" : "token",
      "item_id" : "B",
      "text" : "Recognises different cost behaviour patterns",
      "border_color" : "#000000",
      "background_color" : "#FFFFFF",
      "text_alignment" : "center",
      "font_size" : "9",
      "text_color" : "#000000",
      "width" : 180,
      "height" : 52,
      "x" : 10,
      "y" : 139,
      "multiple_use": true
    },
    {
      "item_type" : "token",
      "item_id" : "C",
      "text" : "Focuses employees on avoiding wasteful expenditure",
      "border_color" : "#000000",
      "background_color" : "#FFFFFF",
      "text_alignment" : "center",
      "font_size" : "9",
      "text_color" : "#000000",
      "width" : 180,
      "height" : 52,
      "x" : 10,
      "y" : 210
    },
    {
      "item_type" : "token",
      "item_id" : "D",
      "text" : "Focuses on controlling the causes of costs",
      "border_color" : "#000000",
      "background_color" : "#FFFFFF",
      "text_alignment" : "center",
      "font_size" : "9",
      "text_color" : "#000000",
      "width" : 180,
      "height" : 52,
      "x" : 10,
      "y" : 280
    },
    {
      "item_type" : "token",
      "item_id" : "E",
      "text" : "Always extends the budget one year into the future",
      "border_color" : "#000000",
      "background_color" : "#FFFFFF",
      "text_alignment" : "center",
      "font_size" : "9",
      "text_color" : "#000000",
      "width" : 180,
      "height" : 52,
      "x" : 11,
      "y" : 350
    },
    {
      "item_type" : "token",
      "item_id" : "F",
      "text" : "Uses adaptive management processes",
      "border_color" : "#000000",
      "background_color" : "#FFFFFF",
      "text_alignment" : "center",
      "font_size" : "9",
      "text_color" : "#000000",
      "width" : 180,
      "height" : 52,
      "x" : 9,
      "y" : 420
    },
    {
      "item_type" : "target",
      "item_id" : "219572_R1",
      "text" : "Target1",
      "border_color" : "#000000",
      "background_color" : "#c0c0c0",
      "text_alignment" : "left",
      "font_size" : "8",
      "text_color" : "#c0c0c0",
      "width" : 180,
      "height" : 52,
      "x" : 310,
      "y" : 70
    },
    {
      "item_type" : "target",
      "item_id" : "219572_R2",
      "text" : "Target2",
      "border_color" : "#000000",
      "background_color" : "#c0c0c0",
      "text_alignment" : "left",
      "font_size" : "8",
      "text_color" : "#c0c0c0",
      "width" : 180,
      "height" : 52,
      "x" : 310,
      "y" : 140
    },
    {
      "item_type" : "target",
      "item_id" : "219572_R3",
      "text" : "Target3",
      "border_color" : "#000000",
      "background_color" : "#c0c0c0",
      "text_alignment" : "left",
      "font_size" : "8",
      "text_color" : "#c0c0c0",
      "width" : 180,
      "height" : 52,
      "x" : 310,
      "y" : 210
    },
    {
      "item_type" : "target",
      "item_id" : "219572_R4",
      "text" : "Target4",
      "border_color" : "#000000",
      "background_color" : "#c0c0c0",
      "text_alignment" : "left",
      "font_size" : "8",
      "text_color" : "#c0c0c0",
      "width" : 180,
      "height" : 52,
      "x" : 310,
      "y" : 280
    },
    {
      "item_type" : "target",
      "item_id" : "219572_R5",
      "text" : "Target5",
      "border_color" : "#000000",
      "background_color" : "#c0c0c0",
      "text_alignment" : "left",
      "font_size" : "8",
      "text_color" : "#c0c0c0",
      "width" : 180,
      "height" : 52,
      "x" : 310,
      "y" : 350
    },
    {
      "item_type" : "target",
      "item_id" : "219572_R6",
      "text" : "Target6",
      "border_color" : "#000000",
      "background_color" : "#c0c0c0",
      "text_alignment" : "left",
      "font_size" : "8",
      "text_color" : "#c0c0c0",
      "width" : 180,
      "height" : 52,
      "x" : 310,
      "y" : 420
    },
    {
      "item_type" : "label",
      "item_id" : "add94d2f0d334e7a9cc4b51118ff9d55",
      "text" : "Statements",
      "border_color" : "#000000",
      "background_color" : "#020202",
      "text_alignment" : "center",
      "font_size" : "9",
      "text_color" : "#fbf4f4",
      "width" : 180,
      "height" : 52,
      "x" : 10,
      "y" : 10
    },
    {
      "item_type" : "label",
      "item_id" : "5d558d3e14254fdc94c56a28455cf57d",
      "text" : "Budgeting approach",
      "border_color" : "#000000",
      "background_color" : "#040404",
      "text_alignment" : "center",
      "font_size" : "9",
      "text_color" : "#fbf6f6",
      "width" : 408,
      "height" : 51,
      "x" : 310,
      "y" : 10
    },
    {
      "item_type" : "label",
      "item_id" : "fb927f565f214e0c9e3029e220cf668e",
      "text" : "Beyond budgeting",
      "border_color" : "#000000",
      "background_color" : "#FFFFFF",
      "text_alignment" : "center",
      "font_size" : "9",
      "text_color" : "#000000",
      "width" : 200,
      "height" : 50,
      "x" : 520,
      "y" : 70
    },
    {
      "item_type" : "label",
      "item_id" : "b4ec7562f36f4bd4b14150e11ebec9f4",
      "text" : "Incremental budgeting",
      "border_color" : "#000000",
      "background_color" : "#FFFFFF",
      "text_alignment" : "center",
      "font_size" : "9",
      "text_color" : "#000000",
      "width" : 200,
      "height" : 50,
      "x" : 520,
      "y" : 140
    },
    {
      "item_type" : "label",
      "item_id" : "88c3297ea7294b468bf4d9335e88a409",
      "text" : "Activity-based budgeting",
      "border_color" : "#000000",
      "background_color" : "#FFFFFF",
      "text_alignment" : "center",
      "font_size" : "9",
      "text_color" : "#000000",
      "width" : 200,
      "height" : 50,
      "x" : 520,
      "y" : 210
    },
    {
      "item_type" : "label",
      "item_id" : "ea2551a48e6d40aca0ec378402b4b00e",
      "text" : "Rolling budgeting",
      "border_color" : "#000000",
      "background_color" : "#FFFFFF",
      "text_alignment" : "center",
      "font_size" : "9",
      "text_color" : "#000000",
      "width" : 200,
      "height" : 50,
      "x" : 520,
      "y" : 280
    },
    {
      "item_type" : "label",
      "item_id" : "61b96d68a24e4859b8068df1e0b8fb0f",
      "text" : "Flexible budgeting",
      "border_color" : "#000000",
      "background_color" : "#FFFFFF",
      "text_alignment" : "center",
      "font_size" : "9",
      "text_color" : "#000000",
      "width" : 200,
      "height" : 50,
      "x" : 520,
      "y" : 350
    },
    {
      "item_type" : "label",
      "item_id" : "909a0668301a4d77875bb83a9c7f87ce",
      "text" : "Zero-based budgeting",
      "border_color" : "#000000",
      "background_color" : "#FFFFFF",
      "text_alignment" : "center",
      "font_size" : "9",
      "text_color" : "#000000",
      "width" : 200,
      "height" : 50,
      "x" : 520,
      "y" : 420
    }
  ],
    'valid_items': [
      {target_id: '219572_R1', token_ids: ['B']},
      {target_id: '219572_R3', token_ids: ['A']}
    ]
  };
  var maxHeight = 800;
  var maxWidth = 900;
  var qContainerElement = $('.dragdrop-question-container');
  var parentContainer = $('.drag-drop-container');
  var qContainer = $('.dragdrop-question-container');
  var tokenIndex = 1;
  var filterValidItems = _.filter(validation.valid_items, function (validItem) {
    return validItem.token_ids.length;
  });
  var validResponses = _.indexBy(filterValidItems || [], 'target_id');
  var userResponses = init.response;
  if (init.state === 'review' && init.response) {
    if (Array.isArray(init.response)) {
      userResponses = _.indexBy(init.response || [], 'target_id');
    }
  }


  _.each(validation.possible_responses, function (possibleResponse) {

    if (possibleResponse.x + possibleResponse.width > maxWidth) {
      maxWidth = possibleResponse.x + possibleResponse.width;
    }

    if (possibleResponse.y + possibleResponse.height > maxHeight) {
      maxHeight = possibleResponse.y + possibleResponse.height;
    }

    if (possibleResponse.item_type === 'token') {
      possibleResponse.index = tokenIndex;
      tokenIndex++;
    }
  });
  parentContainer.css('width', maxWidth + 40 + 'px');
  parentContainer.css('height', maxHeight + 40 + 'px');
  qContainer.css('width', maxWidth + 'px');
  qContainer.css('height', maxHeight + 'px');
  var getTokenStyle = function (possibleResponse) {
    var labelStyle = '';
    labelStyle += 'width:' + possibleResponse.width + 'px';
    labelStyle += labelStyle ? ';' : '';
    labelStyle += 'height:' + possibleResponse.height + 'px';
    labelStyle += labelStyle ? ';' : '';
    labelStyle += 'border-color:' + possibleResponse.border_color;
    labelStyle += labelStyle ? ';' : '';
    labelStyle += 'background-color:' + possibleResponse.background_color;
    labelStyle += labelStyle ? ';' : '';
    if (possibleResponse.text_color) {
      labelStyle += 'color:' + possibleResponse.text_color;
      labelStyle += labelStyle ? ';' : '';
    }
    if (possibleResponse.font_size) {
      labelStyle += 'font-size:' + possibleResponse.font_size + 'px';
      labelStyle += labelStyle ? ';' : '';
    }
    if (possibleResponse.text_alignment) {
      labelStyle += 'text-align:' + possibleResponse.text_alignment;
      labelStyle += labelStyle ? ';' : '';
    } else {
      labelStyle += 'text-align:' + 'center';
      labelStyle += labelStyle ? ';' : '';
    }
    return labelStyle;
  }

  _.each(validation.possible_responses, function (possibleResponse) {

    var labelStyle = getTokenStyle(possibleResponse);
    var positionStyle = '';
    positionStyle += positionStyle ? ';' : '';
    positionStyle += 'top:' + possibleResponse.y + 'px';
    positionStyle += positionStyle ? ';' : '';
    positionStyle += 'left:' + possibleResponse.x + 'px';
    positionStyle += positionStyle ? ';' : '';

    var additionalClass = '';
    additionalClass += additionalClass ? ' ' : '';
    additionalClass += 'drag-drop-' + possibleResponse.item_type;
    additionalClass += additionalClass ? ' ' : '';

    var dataAttributes = '';
    dataAttributes += dataAttributes ? ' ' : '';
    dataAttributes += 'data-itemid="' + possibleResponse.item_id + '"';

    dataAttributes += dataAttributes ? ' ' : '';
    dataAttributes += 'data-multipleuse="' + !!possibleResponse.multiple_use + '"';

    var reviewTokenDIv = '';
    var responseDiv = '';
    if (possibleResponse.item_type === 'token') {
      var showToken = true;
      if (init.state === 'review') {
        reviewTokenDIv += '<span class="lrn_responseIndex">' + possibleResponse.index + '</span>'

        if (userResponses && typeof userResponses === 'object' && !possibleResponse.multiple_use) {
          var findUsedToken = _.find(userResponses, function (userResponse) {
            return userResponse.token_id === possibleResponse.item_id;
          });
          if (findUsedToken) {
            showToken = false;
          }
        }
      }
      responseDiv += '<div  ' + dataAttributes + ' id="container-item-' + possibleResponse.item_id + '" class="container-' + possibleResponse.item_type + ' drag-drop-response-element_position" style="' + labelStyle + positionStyle  + '">';
      if (showToken) {
        responseDiv += '<div  ' + dataAttributes + ' class="item-same-size drag-drop-token-dragged_border ' + additionalClass + '" style="' + labelStyle + '">' + reviewTokenDIv + '<span class="span-' + possibleResponse.item_type + '">' + possibleResponse.text + '</span></div>';
      } else {
        responseDiv += reviewTokenDIv
      }
      responseDiv += '</div>';
    } else if (possibleResponse.item_type === 'target' || possibleResponse.item_type === 'label') {
      if (possibleResponse.item_type === 'target') {
        if (init.state === 'review') {
          var hasToken = false;
          var targetValidResponse = validResponses[possibleResponse.item_id];
          if (targetValidResponse) {
            hasToken = !!targetValidResponse.token_ids.length;
            _.each(validation.possible_responses, function (vPossibleResponse) {
              if (_.indexOf(targetValidResponse.token_ids, vPossibleResponse.item_id) !== -1) {
                reviewTokenDIv += '<span class="lrn_responseIndex">' + vPossibleResponse.index + '</span>'
              }
            });
          }
          var userResponseFeedbackClass = '';
          if (hasToken) {
            userResponseFeedbackClass = 'inCorrectWithUserResponseClass';
          }

          if (userResponses && typeof userResponses === 'object') {
            userResponseFeedbackClass = 'inCorrectWithUserResponseClass';
            if (userResponses[possibleResponse.item_id]) {
              var findUserResponseToken = _.find(validation.possible_responses, function (pr) {
                return pr.item_id === userResponses[possibleResponse.item_id].token_id;
              });
              if (findUserResponseToken) {
                if (hasToken && _.indexOf(targetValidResponse.token_ids, findUserResponseToken.item_id) !== -1) {
                  userResponseFeedbackClass = 'correctWithUserResponseClass';
                }
                var userResponseStyle = getTokenStyle(findUserResponseToken);
                var userResponseAdditionalClass = '';
                userResponseAdditionalClass += userResponseAdditionalClass ? ' ' : '';
                userResponseAdditionalClass += 'drag-drop-' + findUserResponseToken.item_type;
                userResponseAdditionalClass += userResponseAdditionalClass ? ' ' : '';

                additionalClass += userResponseFeedbackClass;
                additionalClass += additionalClass ? ' ' : '';
                reviewTokenDIv += '<div  class="item-same-size ' + userResponseAdditionalClass + '" style="' + userResponseStyle + '"><span class="span-' + findUserResponseToken.item_type + '">' + findUserResponseToken.text + '</span></div>';
              }
            }
          }
        }
      }
      if (possibleResponse.item_type === 'target') {
        responseDiv += '<div  ' + dataAttributes + ' class="container-target drag-drop-response-element_position drag-drop-token-dragged_border ' + additionalClass + '" style="' + labelStyle + positionStyle + '">' + reviewTokenDIv + '<span class="span-' + possibleResponse.item_type + '">' + (init.state === 'review' && !userResponses ? possibleResponse.text : '') + '</span></div>';
      } else {
        responseDiv += '<div  ' + dataAttributes + ' class="drag-drop-response-element_position drag-drop-token-dragged_border ' + additionalClass + '" style="' + labelStyle + positionStyle + '">' + reviewTokenDIv + '<span class="span-' + possibleResponse.item_type + '">' + possibleResponse.text + '</span></div>';
      }
    }
    qContainerElement.append(responseDiv);
  });

  if (init.state === 'resume') {
    window.elementDragged = null;
    var dragElements = document.getElementsByClassName('drag-drop-token');
    var dropElements = document.getElementsByClassName('drag-drop-target');
    var dragTokenContainerDropableElements = document.getElementsByClassName('container-token');
    for (var i = 0; i < dragElements.length; i++) {
      initializeTokenEventListnerForTarget(dragElements[i], init, _);
      initializeTargetToReceiveToken(dragTokenContainerDropableElements[i], init, _);
    }
    for (var i = 0; i < dropElements.length; i++) {
      initializeTargetToReceiveToken(dropElements[i], init, _);
    }
    if (qContainerElement.length) {
      initializeTargetToReceiveToken(window, init, _);
    }
  }
});
var initializeTokenEventListnerForTarget = function (tokenElement, learnosityInit, _) {
  tokenElement.setAttribute('draggable', true);
  tokenElement.addEventListener('dragstart', function(e) {
    e.dataTransfer.effectAllowed = 'move';
    this.parentNode.classList.add('drag-drop-token-container-dragged');
    elementDragged = this;
    var isMultipleUse = elementDragged.dataset.multipleuse && elementDragged.dataset.multipleuse === 'true';
    if (!isMultipleUse) {
      setTimeout(function () {
        var tmp = _.find(elementDragged.classList, function (classname) {
          return classname === 'drag-drop-token-dragged'
        });
        if (!tmp) {
          elementDragged.classList.add('drag-drop-token-dragged');
        }
      });
    }
  });
  tokenElement.addEventListener('dragend', function(e) {
    if (elementDragged) {
      if (this.parentNode) {
        this.parentNode.classList.remove('drag-drop-token-container-dragged');
      }
      elementDragged.classList.remove('drag-drop-token-dragged');
      elementDragged = null;
    }
  });
};

var initializeTargetToReceiveToken = function (targetElement, learnosityInit, _) {
  targetElement.addEventListener('dragover', function(e) {
    if (e.preventDefault) {
      e.preventDefault();
    }
    e.dataTransfer.dropEffect = 'move';
    return false;
  });

  targetElement.addEventListener('drop', function(e) {
    if (e.preventDefault || !elementDragged) e.preventDefault();
    if (e.stopPropagation) e.stopPropagation();

    //1 token to target
    //2 token to token
    //3 target to token
    //4 target to target
    //5 target to window
    //6 token to window
    var isSourceContainer1;
    var isDestinationContainer1;
    var isSourceContainer2;
    var isDestinationContainer2;
    var isSourceContainer3;
    var isDestinationContainer3;
    var isSourceContainer4;
    var isDestinationContainer4;
    var existingTokenElement;
    var cln;
    var findExistingTokenContainer;
    var sourceParentTarget;

    //1. token to target
    if (elementDragged.parentNode) {
      isSourceContainer1 = _.find(elementDragged.parentNode.classList, function (c) {
        return c === 'container-token';
      });
    }


    if (this.classList) {
      isDestinationContainer1 = _.find(this.classList, function (c) {
        return c === 'container-target';
      });
    }

    //2. token to token
    if (elementDragged.parentNode) {
      isSourceContainer2 = _.find(elementDragged.parentNode.classList, function (c) {
        return c === 'container-token';
      });
    }

    if (this.classList) {
      isDestinationContainer2 = _.find(this.classList, function (c) {
        return c === 'container-token';
      });
    }
    //3. target to token
    if (elementDragged.parentNode) {
      isSourceContainer3 = _.find(elementDragged.parentNode.classList, function (c) {
        return c === 'container-target';
      });
    }
    if (this.classList) {
      isDestinationContainer3 = _.find(this.classList, function (c) {
        return c === 'container-token';
      });
    }

    //4. target to target
    if (elementDragged.parentNode) {
      isSourceContainer4 = _.find(elementDragged.parentNode.classList, function (c) {
        return c === 'container-target';
      });
    }
    if (this.classList) {
      isDestinationContainer4 = _.find(this.classList, function (c) {
        return c === 'container-target';
      });
    }
    //1 token to target
    //2 token to token
    //3 target to token
    //4 target to target
    //5 target to window
    //6 token to window
    if (isSourceContainer1 && isDestinationContainer1) {
      console.log('token to target');
      existingTokenElement = this.getElementsByClassName('drag-drop-token');
      if (existingTokenElement.length) {
        // if the target has already token

        // do nothing - both are same token
        if (existingTokenElement[0].dataset.itemid === elementDragged.dataset.itemid) {
          return false;
        } else {

          // token are not same - we place token to its original container



          // remove multiple use token and append drag token to target container
          if (existingTokenElement[0].dataset.multipleuse && existingTokenElement[0].dataset.multipleuse === 'true') {
            existingTokenElement[0].remove();
            cln = elementDragged.cloneNode(true);
            cln.classList.remove('drag-drop-token-dragged');
            cln.classList.remove("drag-drop-token-dragging");
            this.appendChild(cln);
            this.classList.add('drag-drop-token-dropped');
            initializeTokenEventListnerForTarget(cln, learnosityInit, _);
            updateUserResponse(learnosityInit, 'update', this.dataset.itemid, elementDragged.dataset.itemid, _);
            if (elementDragged.dataset.multipleuse && elementDragged.dataset.multipleuse === 'true') {
              elementDragged.classList.remove('drag-drop-token-dragged');
            } else {
              elementDragged.classList.add('drag-drop-token-dragged');
              elementDragged.remove();
            }
          } else {
            // move single use token to its original container and place the new token to target
            findExistingTokenContainer = document.getElementById('container-item-' + existingTokenElement[0].dataset.itemid);
            if (findExistingTokenContainer) {
              var existingToken = existingTokenElement[0].cloneNode(true);
              existingToken.classList.remove('drag-drop-token-dragged');
              existingTokenElement[0].remove();
              findExistingTokenContainer.appendChild(existingToken);
              initializeTokenEventListnerForTarget(existingToken, learnosityInit, _);
            }
            cln = elementDragged.cloneNode(true);
            cln.classList.remove('drag-drop-token-dragged');
            cln.classList.remove("drag-drop-token-dragging");
            this.appendChild(cln);
            this.classList.add('drag-drop-token-dropped');
            initializeTokenEventListnerForTarget(cln, learnosityInit, _);
            updateUserResponse(learnosityInit, 'update', this.dataset.itemid, elementDragged.dataset.itemid, _);
            if (elementDragged.dataset.multipleuse && elementDragged.dataset.multipleuse === 'true') {
              elementDragged.classList.remove('drag-drop-token-dragged');
            } else {
              elementDragged.classList.add('drag-drop-token-dragged');
              elementDragged.remove();
            }
          }
        }
      } else {
        // target does not have token
        cln = elementDragged.cloneNode(true);
        cln.classList.remove('drag-drop-token-dragged');
        cln.classList.remove("drag-drop-token-dragging");
        this.appendChild(cln);
        this.classList.add('drag-drop-token-dropped');
        initializeTokenEventListnerForTarget(cln, learnosityInit, _);
        updateUserResponse(learnosityInit, 'update', this.dataset.itemid, elementDragged.dataset.itemid, _);
        if (elementDragged.dataset.multipleuse && elementDragged.dataset.multipleuse === 'true') {
          elementDragged.classList.remove('drag-drop-token-dragged');
        } else {
          elementDragged.classList.add('drag-drop-token-dragged');
          elementDragged.remove();
        }
      }

    } else if (isSourceContainer2 && isDestinationContainer2) {
      console.log('token to token');
      // here we don't do anythings here
    } else if (isSourceContainer3 && isDestinationContainer3) {
      console.log('target to token');
      var targetParent = elementDragged.parentNode;
      if (elementDragged.dataset.multipleuse && elementDragged.dataset.multipleuse === 'true') {
        // we don't append back to original container
      } else {

        // we append back to original container

        findExistingTokenContainer = document.getElementById('container-item-' + elementDragged.dataset.itemid);
        if (findExistingTokenContainer) {
          var existingToken = elementDragged.cloneNode(true);
          existingToken.classList.remove('drag-drop-token-dragged');
          findExistingTokenContainer.appendChild(existingToken);
          initializeTokenEventListnerForTarget(existingToken, learnosityInit, _);
        }

      }
      elementDragged.remove();
      targetParent.classList.remove('drag-drop-token-dropped');
      targetParent.classList.remove('drag-drop-token-container-dragged');
      updateUserResponse(learnosityInit, 'delete', targetParent.dataset.itemid, '', _);
    } else  if (isSourceContainer4 && isDestinationContainer4) {
      console.log('target to target');

      existingTokenElement = this.getElementsByClassName('drag-drop-token');
      if (existingTokenElement.length) {

        // target have any token


        // source target token and destination target token are same
        if (existingTokenElement[0].dataset.itemid === elementDragged.dataset.itemid) {
          return false;
        } else {

          // source target token and destination target token don't same
          if (existingTokenElement[0].dataset.multipleuse && existingTokenElement[0].dataset.multipleuse === 'true') {
            existingTokenElement[0].remove();
          } else {
            findExistingTokenContainer = document.getElementById('container-item-' + existingTokenElement[0].dataset.itemid);
            if (findExistingTokenContainer) {
              var existingToken = existingTokenElement[0].cloneNode(true);
              existingToken.classList.remove('drag-drop-token-dragged');
              findExistingTokenContainer.appendChild(existingToken);
              initializeTokenEventListnerForTarget(existingToken, learnosityInit, _);
              existingTokenElement[0].remove();
            }
          }
          sourceParentTarget = elementDragged.parentNode;
          // target does not have any token
          cln = elementDragged.cloneNode(true);
          cln.classList.remove('drag-drop-token-dragged');
          cln.classList.remove("drag-drop-token-dragging");
          this.appendChild(cln);
          this.classList.add('drag-drop-token-dropped');
          initializeTokenEventListnerForTarget(cln, learnosityInit, _);
          updateUserResponse(learnosityInit, 'update', this.dataset.itemid, elementDragged.dataset.itemid, _);
          sourceParentTarget.classList.remove('drag-drop-token-dropped');
          sourceParentTarget.classList.remove('drag-drop-token-container-dragged');
          elementDragged.remove();

        }
      } else {
        // target does not have any token
        sourceParentTarget = elementDragged.parentNode;
        cln = elementDragged.cloneNode(true);
        cln.classList.remove('drag-drop-token-dragged');
        cln.classList.remove("drag-drop-token-dragging");
        this.appendChild(cln);
        this.classList.add('drag-drop-token-dropped');
        initializeTokenEventListnerForTarget(cln, learnosityInit, _);
        updateUserResponse(learnosityInit, 'update', this.dataset.itemid, elementDragged.dataset.itemid, _);
        sourceParentTarget.classList.remove('drag-drop-token-dropped');
        sourceParentTarget.classList.remove('drag-drop-token-container-dragged');
        elementDragged.remove();
      }

    } else if (isSourceContainer1 || isSourceContainer2 ) {
      console.log('token to window');
      // do nothings here
    } else if (isSourceContainer3 || isSourceContainer4 ) {
      console.log('target to window');

      var targetParent = elementDragged.parentNode;
      if (elementDragged.dataset.multipleuse && elementDragged.dataset.multipleuse === 'true') {
        // we don't append back to original container
      } else {

        // we append back to original container

        findExistingTokenContainer = document.getElementById('container-item-' + elementDragged.dataset.itemid);
        if (findExistingTokenContainer) {
          var existingToken = elementDragged.cloneNode(true);
          existingToken.classList.remove('drag-drop-token-dragged');
          findExistingTokenContainer.appendChild(existingToken);
          initializeTokenEventListnerForTarget(existingToken, learnosityInit, _);
        }

      }
      elementDragged.remove();
      targetParent.classList.remove('drag-drop-token-dropped');
      targetParent.classList.remove('drag-drop-token-container-dragged');
      updateUserResponse(learnosityInit, 'delete', targetParent.dataset.itemid, '', _);
    }
  });
};

var updateUserResponse = function (learnosityInit, updateMode, targetId, tokenId, _) {
  if (!learnosityInit) return;
  var userResponse = learnosityInit.response || [];
  var tmpTarget = _.find(userResponse, function (a) {
    return a.target_id === targetId;
  });
  if (tmpTarget) {
    if (updateMode === 'update') {
      tmpTarget.token_id = tokenId;
    } else if (updateMode === 'delete') {
      tmpTarget.token_id = '';
    }

  } else {
    if (updateMode === 'update') {
      userResponse.push({target_id: targetId, token_id: tokenId});
    }
  }
  learnosityInit.response = userResponse;
  if (learnosityInit.events) {
    learnosityInit.events.trigger('changed', userResponse);
  }
};









