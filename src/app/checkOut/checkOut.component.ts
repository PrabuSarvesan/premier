import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import * as $ from 'jquery/dist/jquery.min.js';

@Component({
  selector: 'app-check-out',
  templateUrl: './checkOut.component.html',
  styleUrls: ['./checkOut.component.scss'],
})
export class CheckOutComponent implements OnInit {
  public constructor() {
  }
  ngOnInit() {
    $('.method').on('click', function () {
      $('.method').removeClass('blue-border');
      $(this).addClass('blue-border');
    });
    var $cardInput = $('.input-fields input');

    $('.next-btn').on('click', function (e) {

      $cardInput.removeClass('warning');

      $cardInput.each(function () {
        var $this = $(this);
        if (!$this.val()) {
          $this.addClass('warning');
        }
      })
    });
  }
}
