$(function() {
  var init = {state: 'review',
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
      "y" : 70
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
      "y" : 139
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

  var qContainerElement = $('.dragdrop-question-container');
  var parentContainer = $('.drag-drop-container');

  var tokenIndex = 1;
  var validResponses = _.indexBy(validation.valid_items || [], 'target_id');
  var userResponses;
  if (init.state === 'review' && init.response) {
    if (Array.isArray(init.response)) {
      userResponses = _.indexBy(init.response || [], 'target_id');
    }
  }

  var maxHeight = 0;
  var maxWidth = 0;
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
  maxWidth += 20;
  maxHeight += 20;
  parentContainer.css('max-width', maxWidth + 'px');
  parentContainer.css('max-height', maxHeight + 'px');

  _.each(validation.possible_responses, function (possibleResponse) {
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
    }



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
    var reviewTokenDIv = '';
    var responseDiv = '';
    if (possibleResponse.item_type === 'token') {
      if (init.state === 'review') {
        reviewTokenDIv += '<span class="lrn_responseIndex">' + possibleResponse.index + '</span>'
      }
      responseDiv += '<div  ' + dataAttributes + ' id="container-item-' + possibleResponse.item_id + '" class="container-' + possibleResponse.item_type + ' drag-drop-response-element_position" style="' + labelStyle + positionStyle  + '">';
      responseDiv += '<div  ' + dataAttributes + ' class="item-same-size drag-drop-token-dragged_border ' + additionalClass + '" style="' + labelStyle + '">' + reviewTokenDIv + '<span class="span-' + possibleResponse.item_type + '">' + possibleResponse.text + '</span></div>';
      responseDiv += '</div>';
    } else {
      if (possibleResponse.item_type === 'target') {
        if (init.state === 'review') {
          var targetValidResponse = validResponses[possibleResponse.item_id];
          if (targetValidResponse) {
            _.each(validation.possible_responses, function (vPossibleResponse) {
              if (_.indexOf(targetValidResponse.token_ids, vPossibleResponse.item_id) !== -1) {
                reviewTokenDIv += '<span class="lrn_responseIndex">' + vPossibleResponse.index + '</span>'
              }
            });
          }
        }
      }
      if (possibleResponse.item_type === 'target') {
        responseDiv += '<div  ' + dataAttributes + ' class="drag-drop-response-element_position drag-drop-token-dragged_border ' + additionalClass + '" style="' + labelStyle + positionStyle + '">' + reviewTokenDIv + '<span class="span-' + possibleResponse.item_type + '">' + (init.state === 'review' ? possibleResponse.text : '') + '</span></div>';
      } else {
        responseDiv += '<div  ' + dataAttributes + ' class="drag-drop-response-element_position drag-drop-token-dragged_border ' + additionalClass + '" style="' + labelStyle + positionStyle + '">' + reviewTokenDIv + '<span class="span-' + possibleResponse.item_type + '">' + possibleResponse.text + '</span></div>';
      }
    }
    qContainerElement.append(responseDiv);
  });

  if (init.state === 'resume') {
    window.elementDragged = null;
    window.userResponses = {};
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
    setTimeout(function () {
      var tmp = _.find(elementDragged.classList, function (classname) {
        return classname === 'drag-drop-token-dragged'
      });
      if (!tmp) {
        elementDragged.classList.add('drag-drop-token-dragged');
      }
    });
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
    var isTargetDrop = true;
    var tmp;
    tmp = _.find(this.classList, function (classname) {
      return classname === 'container-token'
    });
    var tokenItemId;
    var targetItemId;
    var removeTokenItemId;
    var existingTokenElement;
    var tokenContainerItemId;
    isTargetDrop = !!!tmp;
    tokenItemId = elementDragged.dataset.itemid;
    if (isTargetDrop) {
      if (this.dataset) {
        targetItemId = this.dataset.itemid;
        existingTokenElement = this.getElementsByClassName('drag-drop-token');
        if (existingTokenElement.length) {
          removeTokenItemId = existingTokenElement[0].dataset.itemid;
          if (removeTokenItemId === tokenItemId) {
            elementDragged.classList.remove('drag-drop-token-dragged');
            // drop the same block - target and token same block
            // here we don't need to update the user response
            return false;
          }
        }

        tmp = _.find(this.classList, function (classname) {
          return classname === 'drag-drop-token-dropped'
        });
        if (!tmp) {
          this.classList.add('drag-drop-token-dropped');
        }
        existingTokenElement = this.getElementsByClassName('drag-drop-token');
        if (existingTokenElement.length) {
          removeTokenItemId = existingTokenElement[0].dataset.itemid;
        }
      }
      var elementDraggedParentTarget = elementDragged.parentNode;
      if (elementDraggedParentTarget) {
        tmp = _.find(elementDraggedParentTarget.classList, function (classname) {
          return classname === 'drag-drop-target'
        });
        if (tmp) {
          updateUserResponse(learnosityInit, 'delete', elementDraggedParentTarget.dataset.itemid, '', _);
          elementDraggedParentTarget.classList.remove('drag-drop-token-dropped');
          if (!this.dataset) {
            removeTokenItemId = elementDragged.dataset.itemid;
            existingTokenElement = [];
            existingTokenElement[0] = elementDragged;
          }
        }
      }

    } else {
      if (!this.dataset) {
        // drop the token from its own container
        // here we don't need to update the user response
        return false;
      }
      tokenContainerItemId = this.dataset.itemid;
      if (tokenContainerItemId !== tokenItemId) {
        // token does not allow to share the token container
        // here we don't need to update the user response
        return false;
      }
      var elementDraggedParent = elementDragged.parentNode;
      if (elementDraggedParent) {
        elementDraggedParent.classList.remove('drag-drop-token-dropped');
        targetItemId = elementDraggedParent.dataset.itemid;
        updateUserResponse(learnosityInit, 'delete', targetItemId, '', _);
        existingTokenElement = elementDraggedParent.getElementsByClassName('drag-drop-token');
        if (existingTokenElement.length) {
          removeTokenItemId = existingTokenElement[0].dataset.itemid;
        }
      }
    }
    if (this.dataset) {
      var cln = elementDragged.cloneNode(true);
      cln.classList.remove('drag-drop-token-dragged');
      elementDragged.classList.add('drag-drop-token-dragged');
      cln.classList.remove("drag-drop-token-dragging");
      this.appendChild(cln);
      // here we will update user response
      if (removeTokenItemId !== tokenItemId) {
        updateUserResponse(learnosityInit, 'update', targetItemId, tokenItemId, _);
      }
      elementDragged.remove();
      elementDragged = null;
      initializeTokenEventListnerForTarget(cln, learnosityInit, _);
    }
    if (existingTokenElement && existingTokenElement.length && removeTokenItemId) {
      var findExistingTokenContainer = document.getElementById('container-item-' + removeTokenItemId);
      if (findExistingTokenContainer) {
        var existingToken = existingTokenElement[0].cloneNode(true);
        existingToken.classList.remove('drag-drop-token-dragged');
        findExistingTokenContainer.appendChild(existingToken);
        existingTokenElement[0].remove();
        initializeTokenEventListnerForTarget(existingToken, learnosityInit, _);
      }
    }
    return false;
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







